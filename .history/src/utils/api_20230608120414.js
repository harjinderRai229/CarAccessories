import axios from 'axios';

// Create a new axios instance
const api = axios.create({
  baseURL: 'http://devcarapi.codezlab.com', // Replace with your API base URL
  
});

api.defaults.headers.common['Content-Type'] = 'application/json';

// Retrieve the access token from AsyncStorage
AsyncStorage.getItem('user')
  .then(data => {
    const accessToken = JSON.parse(data)?.accessToken;
    if (accessToken) {
      // Set the access token in the headers
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  })
  .catch(error => {
    console.error('Error retrieving access token:', error);
  });

export default api;



