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
const Stack = createNativeStackNavigator();

function MainContainer() {
    useEffect(() => {
        checkAccessToken();
      }, []);
    
      const checkAccessToken = async () => {
        try {
          const userToken = await AsyncStorage.getItem('user');
          const accessToken = userToken ? JSON.parse(userToken).accessToken : null;
    
          // Navigate to the appropriate screen based on the access token
          if (accessToken) {
            // User is already logged in, navigate to the drawer
            navigation.replace('Drawer1');
          } else {
            // User is not logged in, navigate to the sign-in screen
            navigation.replace('Login');
          }
        } catch (error) {
          // Handle the error, e.g., show an error message or navigate to a fallback screen
          console.error('Error checking access token:', error);
        }
      };
    return (

        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='Drawer1' component={DrawerNavigator}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name= 'Details' component={DetailScreen} options={{headerShown:true}}/>
            <Stack.Screen name= 'CardDetail' component={CardDetails}/>
            <Stack.Screen name='AddToCartScreen' component={AddToCartScreen} options={{headerShown:true}}/>
            <Stack.Screen name='AddToWishList' component={WishList} options={{headerShown:true, headerTitle:'MyWishList'}}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='OtpScreen' component={OtpScreen}/>

            <Stack.Screen name='test' component={test}/>
            
        </Stack.Navigator>

    );
}

export default MainContainer;