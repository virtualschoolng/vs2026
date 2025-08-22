import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Page & Component Imports
import Home from './components/Home';
import Contact from './components/Contact';
import Marquee from './components/Marquee';
import Tutors from './components/Tutors';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Register from './components/Register';
import DashboardPage from './pages/DashboardPage';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import BlogPage from './pages/BlogPage';
import logo from './assets/logo.jpg';

// Simple Nav component that changes based on auth state
const Nav = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Virtual School of Nigeria Logo" className="h-12 w-auto" />
              <span className="text-2xl font-extrabold text-primary font-headline">Virtual School of Nigeria</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-text hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">Home</Link>
            <Link to="/pricing" className="text-text hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">Pricing</Link>
            <Link to="/contact" className="text-text hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">Contact Us</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-text hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">Dashboard</Link>
                <button onClick={logout} className="bg-accent text-white px-5 py-2 rounded-button text-base font-medium hover:bg-accent-hover transition duration-300 ease-in-out">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-text hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">Login</Link>
                <Link to="/register" className="bg-primary text-white px-5 py-2 rounded-button text-base font-medium hover:bg-primary-hover transition duration-300 ease-in-out">Sign Up</Link>
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
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-blue-700 to-green-600 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('/src/images/coper.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-down">
          Virtual School of Nigeria – Empowering Students Nationwide
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Preparing Nigerian students for WAEC, NECO, BECE, UTME, and Common Entrance with flexible online classes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-zoom-in">
          <Link
            to="#"
            className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center justify-center"
          >
            Book Free Trial
          </Link>
          <Link
            to="#curriculum"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center justify-center"
          >
            Explore Curriculum
          </Link>
        </div>
      </div>
    </section>
      <Marquee />
      <Tutors />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />

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
