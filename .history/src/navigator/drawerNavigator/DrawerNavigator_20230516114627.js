import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from '../MainContainer';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      // headerShown:false
      headerTitle:'Car Accessories'
    }}>
      <Drawer.Screen name="MainContainer" component={MainContainer} />
    </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})