import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const Card = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardPrice}>${item.price}</Text>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(25),
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: responsiveWidth(4),
    margin: responsiveWidth(2),
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardImage: {
    width: responsiveWidth(30),
    height: responsiveHeight(15),
    borderRadius: 10,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
    textAlign: 'center',
  },
  cardPrice: {
    fontSize: responsiveFontSize(1.8),
    color: '#999',
    textAlign: 'center',
    marginBottom: responsiveHeight(2),
  },
  cardButton: {
    backgroundColor: '#3f51b5',
    paddingVertical: responsiveHeight(1.5),
    borderRadius: 20,
    alignSelf: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
});

export default Card;
