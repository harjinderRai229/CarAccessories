import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { useContext } from 'react';

// Create a new axios instance
const api = axios.create({
  baseURL: 'http://devcarapi.codezlab.com', // Replace with your API base URL
  
});
const { user } = useContext(AuthContext);
api.defaults.headers.common['Content-Type'] = 'application/json';

api.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken'); // Replace with your actual method of storing the accessToken
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
export default api;



