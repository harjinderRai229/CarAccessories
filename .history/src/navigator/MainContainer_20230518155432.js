import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CardDetails from '../component/CardDetails';
import SplashScreen from '../screens/Splash';
import DrawerNavigator from './drawerNavigator/DrawerNavigator';
import AddToCartScreen from '../screens/AddToCartScreen';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
const Stack = createNativeStackNavigator();

function MainContainer() {
    return (

        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='Drawer1' component={DrawerNavigator}/>
            {/* <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
            }} />
            {/* <Stack.Screen name= 'Details' component={DetailScreen} options={{headerShown:true}}/>
            <Stack.Screen name= 'CardDetail' component={CardDetails}/>
            <Stack.Screen name='AddToCartScreen' component={AddToCartScreen}/>
            <Stack.Screen name='SignUp' component={SignUp}/> */}
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>

    );
}

export default MainContainer;