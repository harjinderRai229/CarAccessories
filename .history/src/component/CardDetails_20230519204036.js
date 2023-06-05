import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
    const { product } = route.params;
    const navigateToLogin = ()=>{

    }
    const na
    const checkSession = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const userId = await AsyncStorage.getItem('userId');
      
        if (accessToken && userId) {
          // Session exists, the user is logged in with a unique access token
          // Perform the "Add to Cart" action or continue with the desired logic
          navigateToHome()
        } else {
          // Session does not exist, the user is not logged in or the access token or user ID is missing
          // Display a message or navigate to the login screen to prompt the user to log in
          navigateToLogin()
        }
      };
      const handleAddToCart = () => {
        checkSession(); // Call the session check function
      
        // Perform the "Add to Cart" action or continue with the desired logic
      };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    // source={{ uri: product.imageUrl }}
                    source={product.image}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}></Text>
                <Text style={styles.description}></Text>
                <Text style={styles.price}></Text>
                <Text style={styles.tax}>Inclusive all the Taxes</Text>

                <View style={styles.quantityInput}>
                    <Text>1</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Add To Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                        <Text style={styles.buttonText}>Add to WishList</Text>
                    </TouchableOpacity>
                </View>
                <Text>
                    <Text style={styles.title}>Product Details</Text>
                    <Text style={styles.description}>Turn your raw steel wheel into stylish looking wheels with MSGA range of Stylish Alloy Wheels</Text>

                    <Text style={styles.description}>Turn your raw steel wheel into stylish looking wheels with MSGA range of Stylish Alloy Wheels</Text>

                    <Text style={styles.description}>Turn your raw steel wheel into stylish looking wheels with MSGA range of Stylish Alloy Wheels</Text>

                    <Text style={styles.description}>Turn your raw steel wheel into stylish looking wheels with MSGA range of Stylish Alloy Wheels</Text>

                    <Text style={styles.description}>Turn your raw steel wheel into stylish looking wheels with MSGA range of Stylish Alloy Wheels</Text>

                    <Text style={styles.description}>Turn your raw steel wheel into stylish looking wheels with MSGA range of Stylish Alloy Wheels</Text>

                    <Text style={styles.description}>Turn your raw steel wheel into stylish looking wheels with MSGA range of Stylish Alloy Wheels</Text>

                    <Text style={styles.description}>Turn your raw steel wheel into stylish looking wheels with MSGA range of Stylish Alloy Wheels</Text>
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    imageContainer: {
        height: '45%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
    },
    description: {
        fontSize: 17,
        color: 'grey',
        marginBottom: 20,
    },
    price: {
        fontSize: 20,
        color: 'black',
        fontWeight: '700',
    },
    tax: {
        fontSize: 12,
        color: 'grey',
        fontWeight: '400',
        marginTop: 5,
    },
    quantityInput: {
        width: '20%',
        height: '13%',
        borderWidth: 1,
        justifyContent: 'center',
        padding: 5,
        marginTop: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        paddingRight: 10,
    },
    button: {
        backgroundColor: '#6610f2',
        width: '40%',
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    buttonText: {
        color: '#fff',
        paddingHorizontal: 5,
        fontSize: 12,
    },
    image: {
        width: '100%',
        height: '90%',
    },
});

export default DetailScreen;
