import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native';
const Card = ({ item }) => {
    const showToast = () => {
        ToastAndroid.show('Added to favorites!', ToastAndroid.SHORT); 
    };
    const addToCart = () => {
        ToastAndroid.show('Added to Cart!', ToastAndroid.SHORT);
    };
    const navigation = useNavigation(); // Get the navigation object from React Navigation

    const handleViewPress = () => {
        navigation.navigate('Card', { productId: item.productId });
    };

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={handleViewPress}>
            <Image style={styles.cardImage} source={{ uri: item.imageUrl }} />
            <TouchableOpacity style={styles.wishBtn}
                onPress={showToast}>
                <Text style={{
                    fontSize: 20,
                    color: '#000'
                }}>♡</Text>
            </TouchableOpacity>
            <Text style={styles.cardName} numberOfLines={1}>{item.prodName}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.btn1} onPress={handleViewPress}>
                    <Text style={styles.btnText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={addToCart}>
                    <Text style={styles.btnText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
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
        marginTop: 5,
        alignItems: 'center'
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
        color: '#000'
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
        height: 30,
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
    },
    wishBtn: {
        backgroundColor: '#fff',
        width: 30,
        height: 30,
        borderRadius: 15,
        position: 'absolute',
        top: 5,
        right: 5,
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .1
    }
});

export default Card;
