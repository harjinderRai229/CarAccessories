// store.js
import { createStore } from 'redux';

const rootReducer = combineReducers({
  Reducers,
  Reducers2,
  AddressReducers
});

const store = createStore(rootReducer);

export default store;
