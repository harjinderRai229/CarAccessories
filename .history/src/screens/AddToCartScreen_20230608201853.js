import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import api from '../utils/api'; // Import the Axios instance

const AddToCartScreen = ({ route }) => {
  const { product , cartId} = route.params;

  const handleRemoveFromCart = async () => {
    try {
      // Make the API request to remove the product from the cart
      const response = await api.delete(`/accessories/removeFromCarts/${cartId}`);
      // devcarapi.codezlab.com/accessories/removeFromCarts
      // Handle the API response if needed
      console.log(response.data);

      // Perform any necessary actions after removing from the cart
    } catch (error) {
      // Handle any error that occurred during the API request
      console.error(error);
    }
  };

  const handleMoveToWishlist = async () => {
    try {
      // Make the API request to move the product to the wishlist
      const response = await api.post(`/accessories/moveToWishlist/${product.productId}`);

      // Handle the API response if needed
      console.log(response.data);

      // Perform any necessary actions after moving to the wishlist
    } catch (error) {
      // Handle any error that occurred during the API request
      console.error(error);
    }
  };
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import api from './api'; // Import the Axios instance
  
  const getCartItem = async (cartId) => {
    try {
      // Retrieve the access token from AsyncStorage
      const data = await AsyncStorage.getItem('user');
      const accessToken = JSON.parse(data)?.accessToken;
  
      // Set the access token in the Authorization header
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  
      // Make the API request to get the cart item details
      const response = await api.get(`/accessories/getCartItem?cartId=${cartId}`);
  
      // Handle the API response if needed
      console.log(response.data);
  
      // Perform any necessary actions with the cart item details
    } catch (error) {
      // Handle any error that occurred during the API request
      console.error(error);
    }
  };
  

  
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {typeof product.imageUrl === 'string' ? (
          <Image style={styles.cardImage} source={{ uri: product.imageUrl }} />
        ) : (
          <Text>Invalid image URL</Text>
        )}
        <Text style={styles.title}>{product.prodName}</Text>
        {/* Render other product details as needed */}
        <View style={styles.quantityContainer}>
          <Text>Quantity: 1</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleRemoveFromCart}>
            <Text style={styles.buttonText}>Remove From Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleMoveToWishlist}>
            <Text style={styles.buttonText}>Move To Wishlist</Text>
          </TouchableOpacity>
        </View>
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
    borderTopRadius: 15,
    borderWidth: 0.5,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 15,
    color: 'black',
    fontWeight: '700',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    height: 40,
    alignItems: 'center',
  },
  button: {
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#C391DC',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default AddToCartScreen;
