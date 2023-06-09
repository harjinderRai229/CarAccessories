// exampleActions.js
import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGOUT } from '.';

export const loginSuccess = (userData) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userData,
  };
};

export const signupSuccess = (userData) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: userData,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
