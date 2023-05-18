import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailScreen = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor:'white'
    }}>
    <View style={{
        width:'100%',
        height:'50%',
        // backgroundColor:'green',
        // justifyContent:'center'
        alignItems:'center',
        padding:5
    }}>
    <Image source={require('../assets/images/11.jpg')} style={{width:"100%", height:"90%"}} resizeMode='contain'/>
    </View>
    <Text>Detail Screen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})