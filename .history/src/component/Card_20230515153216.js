import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
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
    width: width * 0.5,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 12,
    elevation: 4,
    margin: 8,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  img: {
    height: 90,
    width: 90,
    alignSelf: 'center',
    marginTop: 10,
  },
  btn1: {
    backgroundColor: '#6610f2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
  },
  btn2: {
    backgroundColor: '#6610f2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
