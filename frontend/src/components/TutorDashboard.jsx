import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { FaChalkboardUser, FaUsers, FaStar, FaUserGraduate } from 'react-icons/fa6';

const StatCard = ({ icon, label, value }) => (
  <div className="bg-surface p-6 rounded-card shadow-card flex items-center space-x-4">
    <div className="bg-primary-light p-3 rounded-full">
      {icon}
    </div>
    <div>
      <p className="text-text text-sm font-medium">{label}</p>
      <p className="text-secondary text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const CourseCard = ({ title, students }) => (
  <div className="bg-surface p-5 rounded-card shadow-card">
    <h3 className="font-bold text-secondary text-lg mb-2">{title}</h3>
    <div className="flex items-center text-gray-500">
      <FaUsers className="mr-2" />
      <span>{students} Enrolled Students</span>
    </div>
  </div>
);

const TutorDashboard = () => {
  const { user, token } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setLoading(false);
        setError('Authentication token not found.');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/tutor/dashboard-data', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data.');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background">
        <p className="text-lg text-secondary">Loading tutor dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="bg-background min-h-screen font-body text-text">
      <div className="max-w-screen-xl mx-auto p-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-primary font-headline">Tutor Dashboard</h1>
          <p className="text-text-light mt-2">Welcome, {user?.full_name}. Manage your courses and students here.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard icon={<FaChalkboardUser className="text-primary text-2xl" />} label="Active Courses" value={data.stats.active_courses} />
          <StatCard icon={<FaUsers className="text-accent text-2xl" />} label="Total Students" value={data.stats.total_students} />
          <StatCard icon={<FaStar className="text-yellow-500 text-2xl" />} label="Average Rating" value={data.stats.average_rating} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-secondary mb-6">My Active Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.courses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </main>

          <aside>
            <div className="bg-surface p-6 rounded-card shadow-card">
              <h3 className="text-xl font-bold text-secondary mb-4">Recent Student Submissions</h3>
              <ul className="space-y-4">
                {data.recent_submissions.map(sub => (
                  <li key={sub.id} className="flex items-start space-x-4">
                    <div className="bg-gray-200 p-2 rounded-full mt-1">
                      <FaUserGraduate className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{sub.student}</p>
                      <p className="text-sm text-gray-500">{sub.course}</p>
                    </div>
                    <span className="text-sm text-gray-400 ml-auto flex-shrink-0">{sub.submitted}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
