from app import create_app, db
from app.models import User, Course

# Create the Flask app instance
app = create_app()

# This context processor makes 'db', 'User', and 'Course' available in 'flask shell'
@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Course': Course}

# Main entry point for running the application
if __name__ == '__main__':
    print("--- Starting Flask Server in Stable Mode ---")
    # Running with debug=False to ensure the server does not exit prematurely.
    app.run(host='0.0.0.0', port=5000, debug=False)
