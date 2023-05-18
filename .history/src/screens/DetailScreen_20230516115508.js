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
        height:'30%',
        backgroundColor:'green',
        // justifyContent:'center'
        alignItems:'center'
    }}>
    <Image source={require('../assets/im')}/>
        <Text>Detail Screen</Text>
    </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})