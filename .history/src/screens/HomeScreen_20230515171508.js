import React from 'react';
import { FlatList, View } from 'react-native';
// import ProductCard from './ProductCard';
import Card from '../component/Card';
import { product } from '../utils/products';

const HomeScreen = () => {
  return (
  <View style={{
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  }}>

      <FlatList
      data={product}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={item => item.id.toString()}
    //   horizontal
    columnWrapperStyle={StyleSheet.columnWrapper}
      numColumns={2}
    />
  </View>
  );
};

export default HomeScreen;
