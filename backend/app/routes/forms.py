from flask import Blueprint, request, jsonify, current_app
from flask_mail import Message
from app import mail

forms_bp = Blueprint('forms', __name__)

@forms_bp.route('/scholarship-apply', methods=['POST'])
def scholarship_apply():
    """Handles scholarship application form submissions."""
    data = request.get_json()

    full_name = data.get('fullName')
    age_level = data.get('ageLevel')
    contact = data.get('contact')
    reason = data.get('reason')

    if not all([full_name, age_level, contact, reason]):
        return jsonify({'status': 'error', 'message': 'Missing required fields'}), 400

    admin_email = current_app.config.get('SCHOLARSHIP_ADMIN_EMAIL')
    if not admin_email:
        current_app.logger.error('SCHOLARSHIP_ADMIN_EMAIL is not set.')
        return jsonify({'status': 'error', 'message': 'Server configuration error'}), 500

    try:
        msg = Message(
            subject='New Scholarship Application', 
            recipients=[admin_email],
            body=f"""A new scholarship application has been submitted.\n\nDetails:\n- Full Name: {full_name}\n- Age/Class Level: {age_level}\n- Contact Info: {contact}\n\nReason for Request:\n{reason}"""
        )
        mail.send(msg)
        return jsonify({'status': 'success', 'message': 'Application submitted successfully!'}), 200
    except Exception as e:
        current_app.logger.error(f'Failed to send scholarship email: {e}')
        return jsonify({'status': 'error', 'message': 'Could not send application email.'}), 500
