from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_mail import Mail
from config import Config

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()
mail = Mail()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    mail.init_app(app)
    CORS(app)

    # Register blueprints
    from .routes.auth import bp as auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api/auth')

    from .routes.courses import bp as courses_bp
    app.register_blueprint(courses_bp, url_prefix='/courses')

    from .routes.analytics import bp as analytics_bp
    app.register_blueprint(analytics_bp, url_prefix='/analytics')

    from .routes.certificates import bp as certificates_bp
    app.register_blueprint(certificates_bp, url_prefix='/certificates')

    from .routes.payments import payments_bp
    app.register_blueprint(payments_bp, url_prefix='/payments')

    from .routes.forms import forms_bp
    app.register_blueprint(forms_bp, url_prefix='/forms')

    from .routes.tutor import tutor_bp
    app.register_blueprint(tutor_bp, url_prefix='/tutor')

    return app
