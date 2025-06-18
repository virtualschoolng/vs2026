from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import User, Course, Enrollment # Assuming Course and Enrollment models exist

# Placeholder data - to be replaced with actual database queries
# This simulates what the database might return.
MOCK_COURSES = [
    {'id': 1, 'title': 'Advanced JavaScript & ESNext', 'students': 128},
    {'id': 2, 'title': 'Data Structures in Python', 'students': 76},
    {'id': 3, 'title': 'Cybersecurity Fundamentals', 'students': 92},
]

MOCK_SUBMISSIONS = [
    {'id': 1, 'student': 'Alex Doe', 'course': 'Advanced JavaScript', 'submitted': '2h ago'},
    {'id': 2, 'student': 'Jane Smith', 'course': 'Data Structures', 'submitted': '5h ago'},
    {'id': 3, 'student': 'Sam Wilson', 'course': 'Advanced JavaScript', 'submitted': '1d ago'},
]

tutor_bp = Blueprint('tutor', __name__, url_prefix='/tutor')

@tutor_bp.route('/dashboard-data', methods=['GET'])
@jwt_required()
def get_dashboard_data():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if not user or user.role != 'tutor':
        return jsonify({'message': 'Access forbidden: Tutors only'}), 403

    # In a real implementation, you would query the database:
    # courses = Course.query.filter_by(tutor_id=user.id).all()
    # total_students = db.session.query(func.sum(Enrollment.student_id))... etc.
    
    # For now, we return mock data.
    total_students = sum(c['students'] for c in MOCK_COURSES)
    average_rating = 4.8 # Placeholder

    response_data = {
        'stats': {
            'active_courses': len(MOCK_COURSES),
            'total_students': total_students,
            'average_rating': average_rating,
        },
        'courses': MOCK_COURSES,
        'recent_submissions': MOCK_SUBMISSIONS,
    }

    return jsonify(response_data), 200
