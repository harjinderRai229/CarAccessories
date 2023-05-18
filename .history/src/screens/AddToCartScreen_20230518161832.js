import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AddToCartScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
   <View style={{
    borderRadius:15,
    borderWidth:.5,
    padding:10,
    // elevation:1
    shadowColor:2
   }}>
   <Image style={styles.cardImage} source={{ uri: product.imageUrl[0] }} />
      <Text style={styles.title}>{product.prodName}</Text>
      {/* <Text style={styles.description}>{product.description}</Text> */}
     <View style={{fl}}>
     <Text style={styles.price}>{product.price}</Text>
     </View>
     
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
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 120,
    // resizeMode: 'contain',
},
  price: {
    fontSize: 15,
    color: 'black',
    fontWeight: '700',
  },
});

export default AddToCartScreen;
