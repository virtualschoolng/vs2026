from flask import Blueprint, request, jsonify
from app import db
from app.models import Course, Module, Lesson
from app.auth import token_required

bp = Blueprint('courses', __name__)

@bp.route('/courses', methods=['POST'])
@token_required
def create_course(current_user):
    if current_user.role != 'teacher':
        return jsonify({'message': 'Unauthorized'}), 403
    
    data = request.get_json()
    
    course = Course(
        title=data['title'],
        description=data['description'],
        level=data['level'],
        instructor_id=current_user.id
    )
    
    db.session.add(course)
    db.session.commit()
    
    return jsonify({'message': 'Course created successfully', 'course_id': course.id}), 201

@bp.route('/courses/<int:course_id>', methods=['GET'])
@token_required
def get_course(current_user, course_id):
    course = Course.query.get_or_404(course_id)
    
    if current_user.role != 'teacher' and course.instructor_id != current_user.id:
        return jsonify({'message': 'Unauthorized'}), 403
    
    return jsonify({
        'id': course.id,
        'title': course.title,
        'description': course.description,
        'level': course.level,
        'modules': [
            {
                'id': module.id,
                'title': module.title,
                'description': module.description,
                'lessons': [
                    {
                        'id': lesson.id,
                        'title': lesson.title,
                        'content': lesson.content
                    }
                    for lesson in module.lessons
                ]
            }
            for module in course.modules
        ]
    })

@bp.route('/courses/<int:course_id>/modules', methods=['POST'])
@token_required
def add_module(current_user, course_id):
    if current_user.role != 'teacher':
        return jsonify({'message': 'Unauthorized'}), 403
    
    course = Course.query.get_or_404(course_id)
    if course.instructor_id != current_user.id:
        return jsonify({'message': 'Unauthorized'}), 403
    
    data = request.get_json()
    
    module = Module(
        title=data['title'],
        description=data['description'],
        course_id=course_id,
        order=len(course.modules) + 1
    )
    
    db.session.add(module)
    db.session.commit()
    
    return jsonify({'message': 'Module added successfully', 'module_id': module.id}), 201

@bp.route('/modules/<int:module_id>/lessons', methods=['POST'])
@token_required
def add_lesson(current_user, module_id):
    if current_user.role != 'teacher':
        return jsonify({'message': 'Unauthorized'}), 403
    
    module = Module.query.get_or_404(module_id)
    course = Course.query.get_or_404(module.course_id)
    
    if course.instructor_id != current_user.id:
        return jsonify({'message': 'Unauthorized'}), 403
    
    data = request.get_json()
    
    lesson = Lesson(
        title=data['title'],
        content=data['content'],
        module_id=module_id
    )
    
    db.session.add(lesson)
    db.session.commit()
    
    return jsonify({'message': 'Lesson added successfully', 'lesson_id': lesson.id}), 201
