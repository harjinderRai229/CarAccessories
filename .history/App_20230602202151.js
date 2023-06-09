// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/Store';
import Navigator from './src/Navigator';
import Test1 from './src/test/test1';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Navigator /> */}
      <Test1/>
    </Provider>
  );
};

export default App;
