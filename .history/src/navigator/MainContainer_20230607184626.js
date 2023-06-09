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

  
 

  return (
   {
    user.isLoggedIn ? () :
   }
  );
}

export default MainContainer;
