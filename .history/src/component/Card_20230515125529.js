import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Card = ({ item }) => {
    return (

            <View style={styles.card}>
                <Image source={item.image} style={{height:90,
                width:90,
                alignSelf:'center'
                }} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
               <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:5
               }}>
               <TouchableOpacity style={{
                    backgroundColor:'#6610f2',
                    width:50,
                    padding:4,
                    borderRadius: 8,
                    // marginTop:5
                }}>
                    <Text style={{
                        color:'#fff',
                        // paddingVertical:5
                        paddingHorizontal:5
                    }}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor:'#6610f2',
                    width:80,
                    height:30,
                    borderRadius: 8,
                    alignItems:'center',
                    justifyContent:'center'
                    // padding:4
                }}>
                    <Text style={{
                        color:'#fff',
                        fontSize:14,
                        paddingHorizontal:5
                    }}>Add to cart</Text>
                </TouchableOpacity>
               </View>
            </View>
    
    );
};

const styles = StyleSheet.create({
    card: {
        width: 175,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        // marginBottom: 8,
        elevation: 4,
        margin:2
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop:10
    },
    price: {
        fontSize: 12,
        color: '#666',
        // marginTop: 8,
    },
});

export default Card;
