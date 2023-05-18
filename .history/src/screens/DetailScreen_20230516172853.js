import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';

const API_URL = 'http://192.168.1.100:3000/accessories/productDetails';

const CardDetail = ({ route }) => {
    const { productId } = route.params; // Get the product ID from the route parameters
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}?id=${productId}`)
            .then((response) => response.json())
            .then((responseJson) => {
                setProduct(responseJson.data[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!product) {
        return (
            <View style={styles.errorContainer}>
                <Text>Error loading product details</Text>
            </View>
        );
    }

    return (
        <Sc
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    innerContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        marginTop: 10,
        width: "100%",
        justifyContent: 'space-evenly',
        // paddingHorizontal:10,
        paddingRight: 10
    },
    btn1: {
        backgroundColor: '#6610f2',
        width: "40%",
        height: 40,
        // padding: 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20

        // marginTop:5

    },
    btnText: {
        color: '#fff',
        paddingHorizontal: 5,
        fontSize: 12,
    },
    btn2: {
        backgroundColor: '#6610f2',
        width: "40%",
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // padding:2
        marginLeft: 30
    },
    image: {
        width: '100%',
        height: "90%",
        resizeMode: 'cover',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5
    },
    price: {
        fontSize: 18,
        color: 'black',
        fontWeight: '700'

    },
    description: {
        // marginTop: 10,
        marginBottom:10
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CardDetail;
