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
    <Image source={require('../assets/images/11.jpg')} resizeMode='contain'style={{width:"50%", height:"60%"}}/>
        <Text>Detail Screen</Text>
    </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})