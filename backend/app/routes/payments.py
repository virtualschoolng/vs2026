import hmac
import hashlib
import json
from flask import Blueprint, request, jsonify, current_app
from datetime import datetime, timedelta
from app.models import User
from app import db

payments_bp = Blueprint('payments', __name__)

@payments_bp.route('/paystack/webhook', methods=['POST'])
def paystack_webhook():
    """Endpoint to receive Paystack webhooks."""
    paystack_signature = request.headers.get('x-paystack-signature')
    if not paystack_signature:
        return jsonify({'status': 'error', 'message': 'Missing signature'}), 400

    payload = request.get_data()
    secret_key = current_app.config.get('PAYSTACK_SECRET_KEY')

    if not secret_key:
        current_app.logger.error('PAYSTACK_SECRET_KEY is not set.')
        return jsonify({'status': 'error', 'message': 'Server configuration error'}), 500

    hash_ = hmac.new(secret_key.encode('utf-8'), payload, hashlib.sha512).hexdigest()

    if hash_ != paystack_signature:
        current_app.logger.warning('Invalid Paystack signature received.')
        return jsonify({'status': 'error', 'message': 'Invalid signature'}), 400

    try:
        event = json.loads(payload)
        current_app.logger.info(f"Received valid Paystack event: {event.get('event')}")

        if event.get('event') == 'charge.success':
            data = event.get('data', {})
            customer_email = data.get('customer', {}).get('email')
            paystack_customer_code = data.get('customer', {}).get('customer_code')
            amount_paid = data.get('amount')  # Amount is in kobo

            if not customer_email or not amount_paid:
                current_app.logger.warning('Webhook received without customer email or amount.')
                return jsonify({'status': 'error', 'message': 'Missing customer email or amount'}), 400

            user = User.query.filter_by(email=customer_email).first()

            if not user:
                current_app.logger.warning(f"Webhook received for non-existent user: {customer_email}")
                return jsonify({'status': 'success', 'message': 'User not found but acknowledged'}), 200

            # Determine plan based on amount paid (in kobo)
            # Prices: Monthly (15,000 NGN), Quarterly (40,000 NGN), Yearly (120,000 NGN)
            plan = None
            duration_days = 0
            if amount_paid == 1500000: # 15,000 NGN
                plan = 'monthly'
                duration_days = 30
            elif amount_paid == 4000000: # 40,000 NGN
                plan = 'quarterly'
                duration_days = 90
            elif amount_paid == 12000000: # 120,000 NGN
                plan = 'yearly'
                duration_days = 365

            if plan and duration_days > 0:
                user.subscription_plan = plan
                user.subscription_expires_at = datetime.utcnow() + timedelta(days=duration_days)
                if paystack_customer_code:
                    user.paystack_customer_code = paystack_customer_code
                
                db.session.commit()
                current_app.logger.info(f"Successfully updated subscription for {user.email} to '{plan}' plan.")
            else:
                current_app.logger.warning(f"Payment received for {user.email} with un-mappable amount: {amount_paid}")

    except (json.JSONDecodeError, KeyError) as e:
        current_app.logger.error(f'Failed to process Paystack webhook payload: {e}')
        return jsonify({'status': 'error', 'message': 'Invalid payload'}), 400

    return jsonify({'status': 'success'}), 200
