import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailScreen from '../component/CardDetails';
import CardDetail from '../screens/DetailScreen';
import AddToCartScreen from '../screens/AddToCartScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName="Home"
      >
      <Stack.Screen name= 'Details' component={DetailScreen} options={{headerShown:true}}/>
            <Stack.Screen name= 'CardDetail' component={CardDetail}/>
            <Stack.Screen name='AddToCartScreen' component={AddToCartScreen} options={{headerShown:true}}/>
            <Stack.Screen name='AddToWishList' component={WishList} options={{headerShown:true, headerTitle:'MyWishList'}}/>
            
    </Stack.Navigator>
  );
};

export default HomeStack;
