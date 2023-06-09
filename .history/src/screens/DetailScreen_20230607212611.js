import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import api from '../utils/api';
const API_URL = 'http://devcarapi.codezlab.com/accessories/productDetails'; // change in Utils

// const API_URL = 'http://192.168.1.100:3000/accessories/productList'; // tenda Ip address
const CardDetail = ({
  route,
}) => {
  const { productId } = route.params; // Get the product ID from the route parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sliderLoading, setSliderLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const endpoint = 'accessories/productList';
    const url =`${endpoint}?productId=${productId}`;
    api.get(url)
    .then((response) => {
      const { data } = response.data;
      setProduct(data[0]);
      setLoading(false);
      setSliderLoading(false);
      console.log(data[0]);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      setSliderLoading(false);
    });
}, []);

  // add here >>>>>>>>>>>>>>>>>>>>>>>>>>>
  const navigateToHome = () => {
    navigation.navigate('Home');
  }
  const navigateToLogin = () => {
    navigation.navigate('Login');

  }

  // const checkSession = async () => {
  //   const accessToken = await AsyncStorage.getItem('accessToken');
  //   const userId = await AsyncStorage.getItem('userId');

  //   if (accessToken && userId) {
  //     // Session exists, the user is logged in with a unique access token
  //     // Perform the "Add to Cart" action or continue with the desired logic
  //     navigateToHome()
  //   } else {
  //     // Session does not exist, the user is not logged in or the access token or user ID is missing
  //     // Display a message or navigate to the login screen to prompt the user to log in
  //     navigateToLogin()
  //   }
  // };
  // const handleAddToCart = () => {
  //    // Call the session check function

  //     // Perform the "Add to Cart" action or continue with the desired logic
  // };
  const handleAddToCart = () => {
    // onAddToCart(product)
    // checkSession();
    navigation.navigate('AddToCartScreen', { product });
  };
  const handleAddToWishList = () => {

    navigation.replace('AddToWishList', { product });
  };

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
        <Image source={require('../assets/images/noData.png')} style={styles.errorImage} />
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <SliderBox
          style={styles.slider}
          images={product.imageUrl}
          dotColor="blue"
          inactiveDotColor="silver"
          autoplay={true}
          circleLoop={true}
          autoplayInterval={3000}
          dotStyle={styles.dotStyle}
          imageLoadingColor="white"
          onCurrentImagePressed={(index) => alert(index + 1)}
          paginationBoxVerticalPadding={10}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product.prodName}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>₹{product.price}</Text>
          <View style={styles.quantityContainer}>
            <Text>Quantity:</Text>
            <View style={styles.quantityInput}>
              <Text style={{color:"#000"}}>1</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAddToWishList}>
              <Text style={styles.buttonText}>Add to WishList</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productDetailsContainer}>
            <Text style={styles.productDetailsTitle}>Product Details</Text>
            <Text style={styles.productDetailsText}>{product.productDetails}</Text>

            <Text style={styles.productDetailsText}>{product.productDetails}</Text>
            <Text style={styles.productDetailsText}>{product.productDetails}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    marginTop: 10,
    resizeMode: 'contain',
    height: 200,
    width: '90%',
  },
  dotStyle: {
    height: 10,
    width: 15,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginBottom: 10,
  },
  sliderIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  sliderIndicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  sliderIndicatorActiveDot: {
    backgroundColor: '#000',
  },
  contentContainer: {
    paddingLeft: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    marginTop: 20,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  quantityInput: {
    width: '20%',
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#C391DC',
    width: '40%',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    paddingHorizontal: 5,
    fontSize: 14,
  },
  productDetailsContainer: {
    marginTop: 10,
  },
  productDetailsTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginVertical: 5,
  },
  productDetailsText: {
    letterSpacing: 0.5,
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
  errorImage: {
    width: 200,
    height: 200,
  },
});

export default CardDetail;
