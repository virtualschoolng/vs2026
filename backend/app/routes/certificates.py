from flask import Blueprint, request, jsonify
from app import db
from app.models import Assessment
from datetime import datetime

bp = Blueprint('certificates', __name__)

@bp.route('/certificates/generate', methods=['POST'])
def generate_certificate():
    data = request.get_json()
    
    # Verify student completion
    assessment = Assessment.query.filter_by(
        student_id=data['student_id'],
        course_id=data['course_id']
    ).first()
    
    if not assessment or assessment.status != 'completed':
        return jsonify({'message': 'Student has not completed the course'}), 400
    
    # Create certificate data
    certificate_data = {
        'student_name': data['student_name'],
        'course_title': data['course_title'],
        'completion_date': datetime.now().strftime('%Y-%m-%d'),
        'grade': assessment.grade,
        'instructor_name': data['instructor_name']
    }
    
    return jsonify({
        'message': 'Certificate generated successfully',
        'certificate': certificate_data
    })

@bp.route('/certificates/student/<int:student_id>', methods=['GET'])
def get_student_certificates(student_id):
    certificates = []
    
    # Get all completed assessments for the student
    assessments = Assessment.query.filter_by(
        student_id=student_id,
        status='completed'
    ).all()
    
    for assessment in assessments:
        certificates.append({
            'course_title': assessment.course.title,
            'completion_date': assessment.completed_at.strftime('%Y-%m-%d'),
            'grade': assessment.grade,
            'instructor_name': assessment.course.instructor.full_name
        })
    
    return jsonify(certificates)
