import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Page & Component Imports
import Home from './components/Home';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Register from './components/Register';
import DashboardPage from './pages/DashboardPage';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import logo from './assets/logo.svg';

// Simple Nav component that changes based on auth state
const Nav = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Virtual School of Nigeria Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-secondary font-headline">Virtual School of Nigeria</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link to="/register" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them along to that page after they log in.
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Nav />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Route */}
          <Route 
            path="/dashboard/*" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          {/* Redirect old dashboard route */}
          <Route path="/dashboard/student" element={<Navigate to="/dashboard" replace />} />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <FloatingWhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
