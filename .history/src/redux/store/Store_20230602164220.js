// store.js
import { createStore } from 'redux';
import Reducers from '../reducers/Reducers';
const rootReducer = combineReducers({
  Reducers,
});

const store = createStore(rootReducer);

export default store;
