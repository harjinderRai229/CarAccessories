import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
const Stack = createNativeStackNavigator();

function MainContainer() {
    return (

        <Stack.Navigator screenOptions={{
            headerShown:f
        }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name= 'Details' component={DetailScreen}/>
        </Stack.Navigator>

    );
}

export default MainContainer;