import React from 'react';
import { View, Text } from 'react-native';

const AddToCartScreen = ({ route }) => {
  const { product } = route.params; // Get the product data from the route parameters

  return (
    <View>
      <Text>Add to Cart Screen</Text>
      {/* Render the product data */}
      <Text>Product Name: {product.prodName}</Text>
      <Text>Description: {productId.description}</Text>
      <Text>Price: {productId.price}</Text>
      {/* ... Render other product details */}
    </View>
  );
};

export default AddToCartScreen;
