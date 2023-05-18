import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height } from '../utils/helper'

const DetailScreen = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor:'yellow'
    }}>
    <View style={{
        width:'100%',
        height:'50%',
        backgroundColor:'green',
        // justifyContent:'center'
        alignItems:'center',
        padding:20
    }}>
    <Image source={require('../assets/images/11.jpg')} style={{width:"90%", height:"80%"}} resizeMode='con'/>
        <Text>Detail Screen</Text>
    </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})