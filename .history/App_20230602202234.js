// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/Store';
import Navigator from './src/Navigator';
import SpeechToTextComponent from './src/screens/test';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Navigator /> */}
      <SpeechToTextComponent/>
    </Provider>
  );
};

export default App;
