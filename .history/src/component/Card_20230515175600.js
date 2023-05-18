import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProductCard = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.cardImage} source={item.image} />
            <View style={{
                backgroundColor: '#fff',
                width: 50,
                height: 50,
                borderRadius: 25,
                position: 'absolute',
                top:0,
                right:10,
                opacity:1,
                justifyContent:'center',
                alignItems:'center',
                br
            }}>
<Text style={{
    fontSize:40
}}>♡</Text>
            </View>

            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardPrice}>₹{item.price}</Text>
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
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',

    },
    cardContainer: {
        borderWidth: .1,
        borderColor: 'grey',
        flex: 1,
        padding: 10,
        // margin: 5,
        borderRadius: 1,
        // backgroundColor: '#f5f5f5',
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    cardImage: {
        width: '90%',
        height: 150,
        resizeMode: 'contain',
    },
    cardName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardPrice: {
        marginTop: 5,
        fontSize: 14,
        color: '#666',
    },
    columnWrapper: {
        justifyContent: 'space-between',

    },
    btn1: {
        backgroundColor: '#6610f2',
        width: 50,
        padding: 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
        // marginTop:5
    },
    btnText: {
        color: '#fff',
        paddingHorizontal: 5,
        fontSize: 12,
    },
    btn2: {
        backgroundColor: '#6610f2',
        width: 80,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // padding:2
    }
});

export default ProductCard;
