// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/Store';
import Navigator from './src/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Navigator /> */}
      </>
    </Provider>
  );
};

export default App;
