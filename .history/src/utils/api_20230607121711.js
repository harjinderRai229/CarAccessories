import axios from 'axios';

// Create a new axios instance
const api = axios.create({
  baseURL: 'http://devcarapi.codezlab.com', // Replace with your API base URL
  
});

api.defaults.headers.common['Content-Type'] = 'application/json';


export default api;
