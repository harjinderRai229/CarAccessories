import React from 'react';
import { FlatList, View } from 'react-native';
// import ProductCard from './ProductCard';
import Card from '../component/Card';
im

const HomeScreen = () => {
  return (
  <View style={{
     borderTopWidth: 1,
    borderTopColor: '#EDEDED',
    shadowColor: 'black',
    flexDirection: 'row',
    backgroundColor:'white'
  }}>

      <FlatList
      data={product}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={item => item.id.toString()}
    //   horizontal
      numColumns={2}
    />
  </View>
  );
};

export default HomeScreen;
