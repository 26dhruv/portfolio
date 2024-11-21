import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      alert('Session expired, please log in again');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
