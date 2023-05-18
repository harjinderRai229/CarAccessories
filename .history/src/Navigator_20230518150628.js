import React from 'react'
import DrawerNavigator from './navigator/drawerNavigator/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native'
import MainContainer from './navigator/MainContainer'
import Login from './screens/Login'

const Navigator = () => {
  return (
  <NavigationContainer>
    {/* <MainContainer/> */}
    <Login/>
  </NavigationContainer>
  )
}

export default Navigator