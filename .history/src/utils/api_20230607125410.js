import axios from 'axios';

// Create a new axios instance
const api = axios.create({
  baseURL: 'http://devcarapi.codezlab.com', // Replace with your API base URL
  
});

api.defaults.headers.common['Content-Type'] = 'application/json';


export default api;



// const apiWithAccessToken = () => {
//   const authContext = useContext(AuthContext); // Access the authentication context

//   // Retrieve the access token from the authentication context
//   const { accessToken } = authContext.user.data;

//   // Set the access token in the headers
//   api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

//   return api;
// };

// export default apiWithAccessToken();