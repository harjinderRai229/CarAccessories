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
        backgroundColor:'white',
        // justifyContent:'center'
        alignItems:'center',
        padding:20
    }}>
    <Image source={require('../assets/images/11.jpg')} style={{width:"90%", height:"80%"}} resizeMode='contain'/>
        <Text>Detail Screen</Text>
    </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})