import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import AuthNavigator from './AuthNavigator';
const Stack = createNativeStackNavigator();

function MainContainer() {
    return (

        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name='AuthNavigator' component={AuthNavigator}/>
            <Stack.Screen name='Drawer1' component={DrawerNavigator} />


        </Stack.Navigator>

    );
}

export default MainContainer;