import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { childrenStudying } from '../assets/images'; // Import the image

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await axios.post('/api/auth/login', { email, password });
      login(data.token, data.user);
      alert('Login successful!');
      navigate('/'); // Redirect to homepage on successful login
    } catch (err) {
      setError(err.response && err.response.data.message ? err.response.data.message : 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

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
          <h2 className="text-3xl font-extrabold text-center text-accent font-headline mb-6">Welcome Back</h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-text mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-button shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium text-text mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-button shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-accent text-white font-bold py-3 px-6 rounded-button shadow-lg hover:bg-accent-hover transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging In...' : 'Log In'}
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-text-light">
              Need an account?{' '}
              <Link to="/register" className="font-medium text-accent hover:text-accent-dark">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
