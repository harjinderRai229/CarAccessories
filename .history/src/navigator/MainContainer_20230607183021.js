import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../AuthContext';
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

const Stack = createNativeStackNavigator();

function MainContainer() {
  const { user } = React.useContext(AuthContext);

  
  if (user === null || user.) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='Login'>
         <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='OtpScreen' component={OtpScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
         <Stack.Screen name='Drawer1' component={DrawerNavigator} />
      <Stack.Screen name='Details' component={DetailScreen} options={{ headerShown: true }} />
      <Stack.Screen name='CardDetail' component={CardDetails} />
      <Stack.Screen name='AddToCartScreen' component={AddToCartScreen} options={{ headerShown: true }} />
      <Stack.Screen name='AddToWishList' component={WishList} options={{ headerShown: true, headerTitle: 'MyWishList' }} />
     <Stack.Screen name='test' component={test} />
    </Stack.Navigator>
  );
}

export default MainContainer;
