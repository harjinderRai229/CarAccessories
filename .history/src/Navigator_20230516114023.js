import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Navigator = () => {
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

export default Navigator

const styles = StyleSheet.create({})