import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './src/navigator/MainContainer';
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      // headerShown:false
      headerTitle:'Car Accessories'
    }}>
      <Drawer.Screen name="Home" component={MainContainer} />
    </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default App
