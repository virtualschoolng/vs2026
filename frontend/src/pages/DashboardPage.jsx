import React from 'react';
import { useAuth } from '../context/AuthContext';
import StudentDashboard from '../components/StudentDashboard';
import TutorDashboard from '../components/TutorDashboard';

const DashboardPage = () => {
  const { user } = useAuth();

  if (!user) {
    // This is a fallback, as the ProtectedRoute should prevent this from being seen.
    return (
      <div className="flex justify-center items-center min-h-screen bg-background">
        <p className="text-lg text-secondary">Loading dashboard...</p>
      </div>
    );
  }

  // Render the appropriate dashboard based on the user's role
  if (user.role === 'tutor') {
    return <TutorDashboard />;
  }
  
  // By default, show the student dashboard
  return <StudentDashboard />;
};

export default DashboardPage;
