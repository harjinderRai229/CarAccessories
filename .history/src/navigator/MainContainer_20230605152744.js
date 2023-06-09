import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CardDetails from '../component/CardDetails';
import SplashScreen from '../screens/Splash';
import DrawerNavigator from './drawerNavigator/DrawerNavigator';
import AddToCartScreen from '../screens/AddToCartScreen';
import SignUp from '../screens/SignUp';
import WishList from '../screens/WishList';
import Login from '../screens/Login';
import OtpScreen from '../screens/OtpScreen';
import test from '../screens/test';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

function MainContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication =) => {
    try {
        const userObject = useSelector(state => state.auth.accessToken);
      if (userObject) {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log('Error checking authentication:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
        <Stack.Screen name='Drawer1' component={DrawerNavigator}/>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Detail' component={DetailScreen} />
          <Stack.Screen name='CardDetail' component={CardDetails} />
          <Stack.Screen name='AddToCartScreen' component={AddToCartScreen} />
          <Stack.Screen
            name='AddToWishList'
            component={WishList}
            options={{ headerTitle: 'MyWishList' }}
          />
          {/* <Stack.Screen name='Drawer1' component={DrawerNavigator} /> */}
        </>
      ) : (
        <>
          <Stack.Screen name='Splash' component={SplashScreen} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='OtpScreen' component={OtpScreen} />
          <Stack.Screen name='test' component={test} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default MainContainer;
