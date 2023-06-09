import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from './path/to/AuthContext'; // Provide the correct path to your AuthContext file

const api = axios.create({
  baseURL: 'http://devcarapi.codezlab.com', // Replace with your API base URL
});

const setAuthToken = (accessToken) => {
  if (accessToken) {
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

const apiWithAccessToken = () => {
  const authContext = useContext(AuthContext); // Access the authentication context

  // Retrieve the access token from the authentication context
  const { accessToken } = authContext.user.data;

  setAuthToken(accessToken);

  return api;
};

export { api, apiWithAccessToken };
