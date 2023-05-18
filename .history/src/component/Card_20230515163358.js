import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

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
    width: responsiveWidth(45),
    height: responsiveHeight(30),
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: responsiveWidth(4),
    elevation: 4,
    margin: responsiveWidth(2),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  name: {
    fontSize: responsiveWidth(4),
    fontWeight: 'bold',
    marginTop: responsiveHeight(2),
    color: '#000',
  },
  price: {
    fontSize: responsiveWidth(3),
    color: '#666',
  },
  img: {
    height: responsiveHeight(15),
    width: responsiveWidth(40),
    alignSelf: 'center',
  },
  btn1: {
    backgroundColor: '#6610f2',
    width: responsiveWidth(20),
    padding: responsiveWidth(2),
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    paddingHorizontal: responsiveWidth(2),
    fontSize: responsiveWidth(3),
  },
  btn2: {
    backgroundColor: '#6610f2',
    width: responsiveWidth(30),
    height: responsiveHeight(5),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
