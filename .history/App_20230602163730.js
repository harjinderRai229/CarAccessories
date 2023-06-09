// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/'';
import Navigator from './components/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
