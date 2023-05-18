import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AddToCartScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
   <View style={{
    borderRadius:2,
    borderWidth:2
   }}>
   <Image style={styles.cardImage} source={{ uri: product.imageUrl[0] }} />
      <Text style={styles.title}>{product.prodName}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      {/* Render other product details as needed */}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
  },
  cardImage: {
    width: '90%',
    height: 150,
    resizeMode: 'contain',
},
  price: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
});

export default AddToCartScreen;
