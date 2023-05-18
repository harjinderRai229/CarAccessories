import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import { product } from '../utils/products';

const ProductCard = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={item.image} />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth:1
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    // backgroundColor: '#f5f5f5',
  },
  cardImage: {
    width: '100%',
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
});

export default ProductCard;
