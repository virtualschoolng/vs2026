import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { childrenStudying } from '../assets/images';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { name, email, password, confirmPassword, role } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add abort controller for API requests
  const abortController = useRef(new AbortController());

  useEffect(() => {
    const videoElement = document.querySelector('video');
    
    const handlePlay = () => {
      videoElement.play().catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Playback failed:', error);
        }
      });
    };
    
    videoElement.addEventListener('play', handlePlay);
    
    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.pause();
      abortController.current.abort();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(api.register, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role })
      });
      if (!response.data.success) {
        throw new Error(response.data.message || 'Registration failed');
      }
  
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (error) {
      setError(error.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = "w-full px-4 py-3 border border-border rounded-button shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent";

  return (
    <div className="min-h-screen flex font-body bg-background">
      {/* Image Column */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${childrenStudying})` }}
      >
        <div className="w-full h-full bg-accent bg-opacity-20"></div>
      </div>

      {/* Form Column */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-surface p-8 rounded-card shadow-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-accent font-headline">Create Your Account</h2>
            <p className="text-text-light mt-2">Join our community of learners and educators.</p>
          </div>

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md" role="alert">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Full Name</label>
              <input id="name" name="name" type="text" required value={name} onChange={onChange} className={inputStyles} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email Address</label>
              <input id="email" name="email" type="email" required value={email} onChange={onChange} className={inputStyles} />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-2">I am a...</label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`flex items-center justify-center p-4 border rounded-button cursor-pointer ${role === 'student' ? 'bg-accent-light border-accent ring-2 ring-accent' : 'bg-surface border-border'}`}>
                  <input type="radio" name="role" value="student" checked={role === 'student'} onChange={onChange} className="sr-only" />
                  <span className="font-medium text-accent">Student</span>
                </label>
                <label className={`flex items-center justify-center p-4 border rounded-button cursor-pointer ${role === 'teacher' ? 'bg-accent-light border-accent ring-2 ring-accent' : 'bg-surface border-border'}`}>
                  <input type="radio" name="role" value="teacher" checked={role === 'teacher'} onChange={onChange} className="sr-only" />
                  <span className="font-medium text-accent">Teacher</span>
                </label>
              </div>
            </div>

            <button disabled={loading} type="submit" className="w-full bg-accent text-white font-bold py-3 px-6 rounded-button shadow-lg hover:bg-accent-dark transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-text-light">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-accent hover:text-accent-dark hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Register;