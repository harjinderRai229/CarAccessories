// exampleReducer.js
import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGOUT } from '../ActionTypes';

const initialState = {
  loggedInUser: null,
  isLoggedIn: false,
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        loggedInUser: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default exampleReducer;
