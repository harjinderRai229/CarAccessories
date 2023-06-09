// App.js
import React from 'react';
import Navigator from './src/Navigator';
import { AuthContextProvider } from './src/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      {/* Your app component hierarchy */}
      <Navigator/>
    </AuthContextProvider>
  );
};

export default App;
