import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
     <View style={{flexDirection:'row'}}>
     <Text style={styles.price}>{product.price}</Text>
     <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText}>Add to cart</Text>
                </TouchableOpacity>
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
  btnText: {
    color: '#fff',
    paddingHorizontal: 5,
    fontSize: 12,
},
btn2: {
    backgroundColor: '#C391DC',
    width: 80,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // padding:2
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
