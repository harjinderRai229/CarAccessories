import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const Card = ({ item }) => {
  const { width: deviceWidth } = Dimensions.get('window');
  const cardWidth = deviceWidth - 220;
  const cardHeight = cardWidth * 1.25;
  const imgSize = cardHeight * 0.45;
  const btn1Width = imgSize * 0.8;
  const btn1Padding = imgSize * 0.1;
  const btn2Width = imgSize * 1.5;
  const btn2Height = imgSize * 0.5;

  return (
    <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
      <Image source={item.image} style={[styles.img, { height: imgSize, width: imgSize }]} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={[styles.btn1, { width: btn1Width, padding: btn1Padding }]}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn2, { width: btn2Width, height: btn2Height }]}>
          <Text style={styles.btnText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 12,
    elevation: 4,
    margin: 1.5
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: "#000",
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  img: {
    alignSelf: 'center',
    marginBottom: 10
  },
  btn1: {
    backgroundColor: '#6610f2',
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    paddingHorizontal: 5,
    fontSize: 14,
  },
  btn2: {
    backgroundColor: '#6610f2',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Card;
