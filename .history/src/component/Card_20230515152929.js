import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Card = ({ item }) => {
  const cardWidth = width - 220;

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={item.image} style={styles.img} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 12,
    elevation: 4,
    margin: 1.5,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  img: {
    height: 90,
    width: 90,
    alignSelf: 'center',
  },
  btn1: {
    backgroundColor: '#6610f2',
    width: 50,
    padding: 4,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    paddingHorizontal: 5,
    fontSize: 14,
  },
  btn2: {
    backgroundColor: '#6610f2',
    width: 80,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
