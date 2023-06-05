// store.js
import { combineReducers, createStore } from 'redux';
import Reducers from '../reducers/Reducers';
const rootReducer = combineReducers({
  auth : Reducers,
});

const store = createStore(rootReducer);

export default store;
