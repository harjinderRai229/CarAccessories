import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (

    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{
      // headerShown:false
      headerTitle: 'Car Accessories'
    }}>
     <Drawer.Screen name="Home" component={HomeScr} options={{
                  //  headerTintColor:'#00f'
            }} />
    </Drawer.Navigator>

  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})