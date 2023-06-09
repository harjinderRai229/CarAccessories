import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import OtpScreen from '../screens/OtpScreen';
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='OtpScreen' component={OtpScreen}/>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
