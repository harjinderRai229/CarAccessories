import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home/Home';
import CardDetails from '../screens/Home/CardDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName="Home"
      >
      <Stack.Screen name= 'Details' component={DetailScreen} options={{headerShown:true}}/>
            <Stack.Screen name= 'CardDetail' component={CardDetails}/>
            <Stack.Screen name='AddToCartScreen' component={AddToCartScreen} options={{headerShown:true}}/>
            <Stack.Screen name='AddToWishList' component={WishList} options={{headerShown:true, headerTitle:'MyWishList'}}/>
            
    </Stack.Navigator>
  );
};

export default HomeStack;
