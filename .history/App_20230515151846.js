import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <HomeScreen />
  )
}

export default App
