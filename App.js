// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/Store';
import Navigator from './src/Navigator';
import { AuthContextProvider } from './src/AuthContext';

const App = () => {
  return (
    <Provider store={store}>
     <AuthContextProvider>
     <Navigator />
     </AuthContextProvider>
    </Provider>
  );
};

export default App;
