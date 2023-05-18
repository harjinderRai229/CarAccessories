import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailScreen = ({route }) => {
    const { itemId } = route.params;
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
    <Text>itemId: {JSON.stringify(itemId)}</Text>
     <Text style={{
        fontSize:17,
        color:'grey',
        marginBottom:20
    }}>Product Decription</Text>
     <Text style={{
        fontSize:20,
        color:'black',
       fontWeight:'700' 
    }}>price</Text>
    <Text style={{
        fontSize:12,
        color:'grey',
        fontWeight:'400',
        marginTop:5
    }}>Inclusive all the Taxes</Text>
    <View style={{
        width:'15%',
        borderWidth:1
    }}>
        <Text>1</Text>
    </View>
    </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})