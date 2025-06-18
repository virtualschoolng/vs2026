import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaBullseye, FaTrophy, FaUserCircle, FaClock, FaStar, FaArrowRight } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

// MOCK DATA - To be replaced with API calls
const courses = [
  { id: 1, title: 'Introduction to Python', progress: 65, instructor: 'Dr. Angela Yu' },
  { id: 2, title: 'Advanced React & Redux', progress: 80, instructor: 'Stephen Grider' },
  { id: 3, title: 'UI/UX Design Principles', progress: 30, instructor: 'Jonas Schmedtmann' },
];
const deadlines = [
  { id: 1, task: 'Python Mid-term Quiz', due: 'Oct 25, 2024' },
  { id: 2, task: 'React Final Project Submission', due: 'Nov 5, 2024' },
];
const achievements = [
  { id: 1, title: 'Python Basics Completed' },
  { id: 2, title: 'Perfect Score in React Quiz 1' },
];

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className="bg-emerald-50 p-3 rounded-full">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{label}</p>
      <p className="text-secondary text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const CourseCard = ({ title, progress, instructor }) => (
  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="font-bold text-secondary text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">Instructor: {instructor}</p>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
    <p className="text-right text-sm font-medium text-primary">{progress}% Complete</p>
  </div>
);

const SubscriptionStatus = ({ user }) => {
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    if (user?.subscription_expires_at) {
      const expirationDate = new Date(user.subscription_expires_at);
      const now = new Date();
      const diffTime = expirationDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);
    }
  }, [user]);

  const planName = user?.subscription_plan ? user.subscription_plan.charAt(0).toUpperCase() + user.subscription_plan.slice(1) : 'No';
  const isTrial = user?.subscription_plan === 'trial';

  return (
    <div className="bg-gradient-to-r from-secondary to-blue-900 text-white p-6 rounded-lg shadow-lg mb-12">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <FaStar className={`${isTrial ? 'text-yellow-400' : 'text-accent'}`} />
            <h2 className="text-2xl font-bold font-headline">{planName} Plan</h2>
          </div>
          {daysLeft !== null && daysLeft > 0 && (
            <p className="flex items-center space-x-2 text-gray-300">
              <FaClock />
              <span>{daysLeft} {daysLeft === 1 ? 'day' : 'days'} remaining</span>
            </p>
          )}
          {daysLeft !== null && daysLeft <= 0 && <p className="text-red-400 font-bold">Your subscription has expired.</p>}
        </div>
        {(isTrial || !user?.subscription_plan) && (
          <Link to="/pricing" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center space-x-2">
            <span>Upgrade Your Plan</span>
            <FaArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};

const StudentDashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background">
        <div className="text-center">
          <p className="text-lg text-secondary">Loading your dashboard...</p>
          {/* You can add a spinner component here for better UX */}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen font-body text-text">
      <div className="max-w-screen-xl mx-auto p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-secondary font-headline">Welcome back, {user?.full_name}!</h1>
          <p className="text-gray-600 mt-2">Let's continue your learning journey and reach your goals.</p>
        </header>

        <SubscriptionStatus user={user} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard icon={<FaBook className="text-primary text-2xl" />} label="Courses in Progress" value={courses.length} />
          <StatCard icon={<FaBullseye className="text-accent text-2xl" />} label="Pending Deadlines" value={deadlines.length} />
          <StatCard icon={<FaTrophy className="text-yellow-500 text-2xl" />} label="Achievements Unlocked" value={achievements.length} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-secondary mb-6">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </main>

          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Upcoming Deadlines</h3>
              <ul className="space-y-4">
                {deadlines.map(deadline => (
                  <li key={deadline.id} className="flex justify-between items-center">
                    <span>{deadline.task}</span>
                    <span className="font-semibold text-primary-dark">{deadline.due}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-secondary mb-4">Recent Achievements</h3>
              <ul className="space-y-3">
                {achievements.map(ach => (
                  <li key={ach.id} className="flex items-center space-x-3">
                    <FaTrophy className="text-yellow-500" />
                    <span>{ach.title}</span>
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

export default StudentDashboard;
