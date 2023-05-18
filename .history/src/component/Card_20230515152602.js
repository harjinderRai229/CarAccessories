import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { width } from '../utils/helper';

const Card = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.btnText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        width: width -50,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 7,
        padding: 12,
        // marginBottom: 8,
        elevation: 4,
        margin: 1.5
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        color: "#000",
    },
    price: {
        fontSize: 14,
        color: '#666',

        // marginTop: 8,
    },
    img: {
        height: 90,
        width: 90,
        alignSelf: 'center'
    },
    btn1: {
        backgroundColor: '#6610f2',
        width: 50,
        padding: 4,
        borderRadius: 8,
        // marginTop:5
    },
    btnText: {
        color: '#fff',
        paddingHorizontal: 5,
        fontSize: 14,
    },
    btn2: {
        backgroundColor: '#6610f2',
        width: 80,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
        // padding:4
    }
});

export default Card;
