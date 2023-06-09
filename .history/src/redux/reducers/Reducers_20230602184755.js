//Reducer.js
import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGOUT , SET_ACCESS_TOKEN, CLEAR_ACCESS_TOKEN} from '../ActionTypes';

const initialState = {
  loggedInUser: null,
  isLoggedIn: false,
  accessToken: '',
};

const Reducer = (state = initialState, action) => {
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
      case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case CLEAR_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default Reducer;
