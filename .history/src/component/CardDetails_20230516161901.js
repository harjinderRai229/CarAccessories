import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CardDetail = ({ route }) => {
  const { product } = route.params; // Get the product from the route parameters

  return (
    <View style={styles.container}>
    <Image
      style={styles.image}
      source={{}}
    />
      <Text style={styles.title}>{product.prodName}</Text>
      <Text style={styles.price}>{product.price}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
});

export default CardDetail;
