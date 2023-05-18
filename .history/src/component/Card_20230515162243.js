import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

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
        width: responsiveWidth(50),
        height: responsiveHeight(25),
        backgroundColor: '#fff',
        borderRadius: 7,
        padding: responsiveWidth(3),
        elevation: 4,
        // margin: responsiveWidth(0.5),
        marginHorizontal: responsiveWidth(0.5),
        marginHorizontal: responsiveWidth(0.5),
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(1),
    },
    name: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        marginTop: responsiveHeight(1),
        color: '#000',
    },
    price: {
        fontSize: responsiveFontSize(1.5),
        color: '#666',
    },
    img: {
        height: responsiveHeight(10),
        width: responsiveWidth(20),
        alignSelf: 'center',
    },
    btn1: {
        backgroundColor: '#6610f2',
        width: responsiveWidth(15),
        padding: responsiveWidth(1),
        borderRadius: 8,
    },
    btnText: {
        color: '#fff',
        paddingHorizontal: responsiveWidth(1),
        fontSize: responsiveFontSize(1.5),
    },
    btn2: {
        backgroundColor: '#6610f2',
        width: responsiveWidth(25),
        height: responsiveHeight(3),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Card;
