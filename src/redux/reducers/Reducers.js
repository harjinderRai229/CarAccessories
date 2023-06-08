import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGOUT, SET_ACCESS_TOKEN, CLEAR_ACCESS_TOKEN, SET_SESSION, CLEAR_SESSION } from '../ActionTypes';

const initialState = {
  loggedInUser: null,
  isLoggedIn: false,
  accessToken: '',
  session: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload,
        isLoggedIn: true,
        session: true,
      };
    case LOGOUT:
      return {
        ...state,
        loggedInUser: null,
        isLoggedIn: false,
        accessToken: '',
        session: false,
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
        session: action.payload !== '',
      };
    case CLEAR_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: '',
        session: false,
      };
    case SET_SESSION:
      return {
        ...state,
        session: action.payload,
      };
    case CLEAR_SESSION:
      return {
        ...state,
        session: false,
      };
    default:
      return state;
  }
};

export default reducer;
