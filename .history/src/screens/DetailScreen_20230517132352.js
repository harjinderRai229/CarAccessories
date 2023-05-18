import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';

const API_URL = 'http://192.168.188.134:3000/accessories/productDetails'; // change in Utils 

const CardDetail = ({ route }) => {
  const { productId } = route.params; // Get the product ID from the route parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sliderLoading, setSliderLoading] = useState(true);

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
    <View style={{flex: 1}}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
          );
          setCurrentImageIndex(newIndex);
        }}
      >
        {product.imageUrl.map((imageUrl, index) => (
          <View key={index} style={styles.imageContainer}>
            {sliderLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <Image style={styles.image} source={{ uri: imageUrl }} />
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.sliderIndicator}>
        {product.imageUrl.map((_, index) => (
          <View
            key={index}
            style={[
              styles.sliderIndicatorDot,
              index === currentImageIndex && styles.sliderIndicatorActiveDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{product.prodName}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.tax}>{product.tax}</Text>

        <View style={styles.quantityContainer}>
          <Text>Quantity:</Text>
          <View style={styles.quantityInput}>
            <Text>1</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to WishList</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productDetailsContainer}>
          <Text style={styles.productDetailsTitle}>Product Details</Text>
          <Text style={styles.productDetailsText}>{product.productDetails}</Text>
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
  imageContainer: {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginBottom: 10,
  },
  contentContainer: {
    paddingLeft: 20,
    paddingBottom: 20, // Add paddingBottom to leave space for the bottom content
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
  tax: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '400',
    marginBottom: 10,
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
    fontSize: 12,
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
 
});
export const 