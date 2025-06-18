from flask import Blueprint, request, jsonify
from datetime import datetime, timedelta
from app.models import User
from app import db
from app.auth import generate_token, verify_token
from werkzeug.security import check_password_hash

bp = Blueprint('auth', __name__)

@bp.route('/register', methods=['POST'])
def register():
    print("--- REGISTRATION ATTEMPT RECEIVED ---")
    data = request.get_json()
    print(f"Data: {data}")
    
    if User.query.filter_by(email=data['email']).first():
        print("Email already registered.")
        return jsonify({'message': 'Email already registered'}), 400
    
    print("Creating user object...")
    
    user = User(
        email=data['email'],
        full_name=data['name'],
        phone_number=data.get('phone_number'),
        role=data.get('role', 'student') # Default role to student
    )
    user.set_password(data['password'])
    
    # Check for trial parameter and set trial period if present
    is_trial = request.args.get('trial', 'false').lower() == 'true'
    if is_trial:
        user.subscription_plan = 'trial'
        user.subscription_expires_at = datetime.utcnow() + timedelta(days=7)
    
    print("Adding user to session...")
    db.session.add(user)
    print("Committing to database...")
    db.session.commit()
    print("--- COMMIT SUCCESSFUL ---")
    
    token = generate_token(user.id)
    print("Token generated.")
    
    return jsonify({
        'message': 'User registered successfully',
        'token': token,
        'user': {
            'id': user.id,
            'email': user.email,
            'full_name': user.full_name,
            'role': user.role,
            'subscription_plan': user.subscription_plan,
            'subscription_expires_at': user.subscription_expires_at.isoformat() if user.subscription_expires_at else None
        }
    }), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    
    if user and check_password_hash(user.password_hash, data['password']):
        token = generate_token(user.id)
        return jsonify({
            'message': 'Login successful',
            'token': token,
            'user': {
                'id': user.id,
                'email': user.email,
                'full_name': user.full_name,
                'role': user.role,
                'subscription_plan': user.subscription_plan,
                'subscription_expires_at': user.subscription_expires_at.isoformat() if user.subscription_expires_at else None
            }
        })
    
    return jsonify({'message': 'Invalid credentials'}), 401

@bp.route('/verify-token', methods=['POST'])
def verify_token_endpoint():
    auth_header = request.headers.get('Authorization', '')
    if ' ' in auth_header:
        token = auth_header.split(' ')[-1]
    else:
        token = auth_header

    if not token:
        return jsonify({'message': 'No token provided'}), 401
    
    try:
        user_id = verify_token(token)
        user = User.query.get(user_id)
        if not user:
            return jsonify({'valid': False, 'message': 'User not found'}), 401
            
        return jsonify({
            'valid': True,
            'user': {
                'id': user.id,
                'email': user.email,
                'full_name': user.full_name,
                'role': user.role,
                'subscription_plan': user.subscription_plan,
                'subscription_expires_at': user.subscription_expires_at.isoformat() if user.subscription_expires_at else None
            }
        })
    except Exception as e:
        return jsonify({'valid': False, 'message': str(e)}), 401
