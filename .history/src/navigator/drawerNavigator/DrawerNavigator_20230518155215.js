import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import HomeScreen from '../../screens/HomeScreen';
import Login from '../../screens/Login';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (

    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{
      // headerShown:false
      headerTitle: 'Car Accessories'
    }}>
     {/* <Drawer.Screen name="Home" component={HomeScreen} options={{
                  //  headerTintColor:'#00f'
            }} /> */}
            <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>

  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})