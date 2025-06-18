from flask import Blueprint, jsonify
from app import db
from app.models import Course, Enrollment, Assessment
from sqlalchemy import func

bp = Blueprint('analytics', __name__)

@bp.route('/analytics/overview', methods=['GET'])
def get_overview():
    total_courses = db.session.query(func.count(Course.id)).scalar()
    active_students = db.session.query(func.count(func.distinct(Enrollment.student_id))).scalar()
    completed_courses = db.session.query(func.count(func.distinct(
        db.session.query(Assessment.student_id)
        .filter(Assessment.status == 'completed')
        .subquery()
    ))).scalar()
    
    total_progress = db.session.query(func.avg(Assessment.progress)).scalar()
    average_progress = round(total_progress or 0, 2)
    
    return jsonify({
        'total_courses': total_courses,
        'active_students': active_students,
        'completed_courses': completed_courses,
        'average_progress': average_progress
    })

@bp.route('/analytics/student-performance', methods=['GET'])
def get_student_performance():
    performance = db.session.query(
        Assessment.student_id,
        func.avg(Assessment.progress).label('avg_progress'),
        func.max(Assessment.status).label('status')
    ).group_by(Assessment.student_id).all()
    
    results = []
    for student_id, avg_progress, status in performance:
        results.append({
            'student_id': student_id,
            'progress': round(avg_progress, 2),
            'status': status
        })
    
    return jsonify(results)

@bp.route('/analytics/course-stats/<int:course_id>', methods=['GET'])
def get_course_stats(course_id):
    course = Course.query.get_or_404(course_id)
    
    enrollment_count = db.session.query(func.count(Enrollment.id))\
        .filter(Enrollment.course_id == course_id).scalar()
    
    completed_count = db.session.query(func.count(Assessment.id))\
        .filter(Assessment.course_id == course_id, Assessment.status == 'completed')\
        .scalar()
    
    avg_progress = db.session.query(func.avg(Assessment.progress))\
        .filter(Assessment.course_id == course_id).scalar()
    
    return jsonify({
        'course_id': course_id,
        'title': course.title,
        'enrollment_count': enrollment_count,
        'completed_count': completed_count,
        'average_progress': round(avg_progress or 0, 2)
    })
