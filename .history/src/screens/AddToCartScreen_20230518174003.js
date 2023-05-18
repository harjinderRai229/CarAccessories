import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AddToCartScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
   <View style={{
    borderRadius:15,
    borderWidth:.5,
    paddingTop:10,
    // elevation:1
    shadowColor:2
   }}>
   <Image style={styles.cardImage} source={{ uri: product.imageUrl[0] }} />
      <Text style={styles.title}>{product.prodName}</Text>
      {/* <Text style={styles.description}>{product.description}</Text> */}
     {/* <View style={{flexDirection:'row' , justifyContent:'space-around', alignItems:'center'}}> */}
     <View style={styles.quantityContainer}>
            <Text>Quantity:</Text>
            <View style={styles.quantityInput}>
              <Text>1</Text>
            </View>
            <Text style={styles.price}>{product.price}</Text>
          </View>

    
    
    
     <View style={{flexDirection:'row' , justifyContent:'space-around', alignItems:'center', borderTopWidth:.5}}>
     <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText}>Remove From Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText}>Remove From Cart</Text>
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
    color: '#C391DC',
    fontSize: 14,
    fontWeight:'700'
},
btn2: {
    // backgroundColor: '#C391DC',
    width:"50%",
    height: 30,
    // borderLeftRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth:.5
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    justifyContent:'space-around'
  },
  quantityInput: {
    width: '20%',
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default AddToCartScreen;
