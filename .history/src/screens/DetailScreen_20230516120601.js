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
    <View style={{
        paddingLeft:20
    }}>
    <Text style={{
        fontSize:20,
        color:'black',
        marginBottom:20
    }}>Product Name</Text>
     <Text style={{
        fontSize:17,
        color:'grey'
    }}>Product Decription</Text>
     <Text style={{
        fontSize:20,
        color:'black'
    }}>Product Name</Text>
    </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})