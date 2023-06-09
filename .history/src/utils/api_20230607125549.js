import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext'; // Provide the correct path to your AuthContext file

const api = axios.create({
  baseURL: 'http://devcarapi.codezlab.com', // Replace with your API base URL
});

api.defaults.headers.common['Content-Type'] = 'application/json';

const apiWithAccessToken = () => {
  const authContext = useContext(AuthContext); // Access the authentication context

  // Retrieve the access token from the authentication context
  const { accessToken } = authContext.user.data;

  // Set the access token in the headers
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  return api;
};

export default apiWithAccessToken();
