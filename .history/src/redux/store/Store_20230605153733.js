import { createStore } from 'redux';
import reducer from '../reducers/ducer';

const store = createStore(reducer);

export default store;
