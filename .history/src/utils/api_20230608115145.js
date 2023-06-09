import axios from 'axios';

// Create a new axios instance
const api = axios.create({
  baseURL: 'http://devcarapi.codezlab.com', // Replace with your API base URL
  
});

api.defaults.headers.common['Content-Type'] = 'application/json';

// Add an interceptor to modify the headers before each request
api.interceptors.request.use(async config => {
  const storedUser = await AsyncStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    const accessToken = user?.data?.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});


export default api;



