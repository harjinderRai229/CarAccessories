import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{
            headerShown: false,
        }}/>
      </Stack.Navigator>
   
  );
}

export default MainContainer;