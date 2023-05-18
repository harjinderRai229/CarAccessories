import React from 'react'
import DrawerNavigator from './navigator/drawerNavigator/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native'
import MainContainer from './navigator/MainContainer'

const Navigator = () => {
  return (
  <NavigationContainer>
    <MainContainer/>
  </NavigationContainer>
  )
}

export default Navigator