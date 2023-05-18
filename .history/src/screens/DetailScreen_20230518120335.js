import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http://192.168.1.100:3000/accessories/productDetails'; // change in Utils

const CardDetail = ({ 
  route, 
  onRemoveItem,
  onAddWishList,
  onRemoveFromWishList,
  isWishList,
  onAddToCart,
 }) => {
  const { productId } = route.params; // Get the product ID from the route parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sliderLoading, setSliderLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`${API_URL}?productId=${productId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setProduct(responseJson.data[0]);
        setLoading(false);
        setSliderLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setSliderLoading(false);
      });
  }, []);

  const handleAddToCart = () => {
    on
    navigation.navigate('AddToCartScreen', { product });
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
          <Text style={styles.price}>{product.price}</Text>

          <View style={styles.quantityContainer}>
            <Text>Quantity:</Text>
            <View style={styles.quantityInput}>
              <Text>1</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
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
    backgroundColor: '#6610f2',
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
