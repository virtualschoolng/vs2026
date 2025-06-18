# Virtual School Platform

A comprehensive online learning platform for Virtual School of Nigeria.

## Setup Instructions

### Backend Setup
1. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```
   pip install flask flask-sqlalchemy flask-jwt-extended flask-mail python-dotenv
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory with:
   ```
   SECRET_KEY=your_secret_key
   DATABASE_URL=sqlite:///virtualschool.db
   MAIL_SERVER=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USERNAME=your_email@gmail.com
   MAIL_PASSWORD=your_app_password
   ```

4. Run migrations:
   ```
   flask db init
   flask db migrate
   flask db upgrade
   ```

5. Start the backend server:
   ```
   python app.py
   ```

### Frontend Setup
1. Install dependencies:
   ```
   cd frontend
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

The frontend will be available at http://localhost:3000 and the backend at http://localhost:5000.

## Features

- User Authentication
- Course Management
- Student Progress Tracking
- Assessments and Quizzes
- Analytics Dashboard
- Certificate Generation
- Mobile App Integration
- Government Integration

## Tech Stack

- Frontend: React.js, Material-UI, Redux Toolkit
- Backend: Python Flask, SQLAlchemy
- Database: SQLite (can be configured to PostgreSQL)
- Authentication: JWT
- Charts: Recharts
- PDF Generation: jsPDF, html2canvas
