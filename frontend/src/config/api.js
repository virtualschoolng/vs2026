// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// API Endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  
  // User endpoints
  USER_PROFILE: '/api/user/profile',
  
  // Add more endpoints as needed
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  // If the endpoint already has the base URL, return as is
  if (endpoint.startsWith('http')) {
    return endpoint;
  }
  
  // Remove any leading slashes from the endpoint
  const cleanEndpoint = endpoint.replace(/^\/+/, '');
  
  // If we have a base URL, use it, otherwise use relative URL
  return API_BASE_URL ? `${API_BASE_URL}/${cleanEndpoint}` : `/${cleanEndpoint}`;
};

// Default headers for API requests
export const defaultHeaders = {
  'Content-Type': 'application/json',
  // Add any default headers here
};

// Helper function to handle API responses
export const handleResponse = async (response) => {
  const data = await response.json();
  
  if (!response.ok) {
    const error = new Error(data.message || 'Something went wrong');
    error.status = response.status;
    error.data = data;
    throw error;
  }
  
  return data;
};
