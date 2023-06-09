// Actions.js
import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGOUT, SET_ACCESS_TOKEN, CLEAR_ACCESS_TOKEN } from '../ActionTypes';

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

export const setAccessToken = (accessToken) => ({
  type: SET_ACCESS_TOKEN,
  payload: accessToken,
});

export const clearAccessToken = () => ({
  type: CLEAR_ACCESS_TOKEN,
});
export const setSession = (userObject) => ({
  type: actionTypes.SET_SESSION,
  payload: userObject,
});

export const clearSession = () => ({
  type: actionTypes.CLEAR_SESSION,
});