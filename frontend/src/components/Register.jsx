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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!role) {
        setError('Please select a role');
        return;
    }
    setError('');
    setLoading(true);
    try {
      await axios.post('/api/auth/register', { name, email, password, role });
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = "w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  return (
    <div className="min-h-screen flex font-body bg-background">
      {/* Image Column */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${childrenStudying})` }}
      >
        <div className="w-full h-full bg-secondary bg-opacity-50"></div>
      </div>

      {/* Form Column */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary font-headline">Create Your Account</h2>
            <p className="text-text mt-2">Join our community of learners and educators.</p>
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
              <label htmlFor="password" className="block text-sm font-medium text-text mb-1">Password</label>
              <input id="password" name="password" type="password" required value={password} onChange={onChange} className={inputStyles} />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-text mb-1">Confirm Password</label>
              <input id="confirmPassword" name="confirmPassword" type="password" required value={confirmPassword} onChange={onChange} className={inputStyles} />
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">I am a...</label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${role === 'student' ? 'bg-primary-light border-primary ring-2 ring-primary' : 'bg-gray-50 border-gray-200'}`}>
                  <input type="radio" name="role" value="student" checked={role === 'student'} onChange={onChange} className="sr-only" />
                  <span className="font-medium text-secondary">Student</span>
                </label>
                <label className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${role === 'teacher' ? 'bg-primary-light border-primary ring-2 ring-primary' : 'bg-gray-50 border-gray-200'}`}>
                  <input type="radio" name="role" value="teacher" checked={role === 'teacher'} onChange={onChange} className="sr-only" />
                  <span className="font-medium text-secondary">Teacher</span>
                </label>
              </div>
            </div>

            <button disabled={loading} type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-button shadow-lg hover:bg-primary-hover transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-text">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary hover:text-primary-hover hover:underline">
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