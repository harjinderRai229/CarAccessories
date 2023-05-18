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
        <View style={styles.container}>
            <View style={{
                // width: '100%',
                height: '45%',
                // backgroundColor:'green',
                justifyContent: 'center',
                alignItems: 'center',
                // padding: 5,

            }}>
                <Image style={styles.image} source={{ uri: product.imageUrl[0] }} />
            </View>
            <View style={{
                paddingLeft: 20
            }}>
                <Text style={styles.title}>{product.prodName}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={{
                    fontSize: 12,
                    color: 'grey',
                    fontWeight: '400',
                    // marginTop: 5
                }}>
                    {product.tax}
                </Text>
             

                <View style={{
                    width: '20%',
                    height: '13%',
                    borderWidth: 1,
                    // alignItems:''
                    justifyContent: 'center',
                    padding: 5,
                    marginTop: 10,
                    borderRadius: 5
                }}>
                    <Text>1</Text>
                </View>


                <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.btn1} >
                        <Text style={styles.btnText}>Add To Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2}>
                        <Text style={styles.btnText}>Add to WishList</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{fontSize:25, fontWeight:'600'}}>ProductDetails </Text>
                <Text>{product.productDetails}</Text>
            </View>
            {/* Display other details of the product */}
        </View>
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
