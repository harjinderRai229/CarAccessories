import React from 'react';
import { FlatList, View } from 'react-native';
// import ProductCard from './ProductCard';
import Card from '../component/Card';
const product = [
  {
    id: 1,
    name: 'Door Still Guard',
    // image:'',
    price: 200,
  },
  {
    id: 2,
    name: 'DashBoard Frame',
    price: 1500,
  },
  {
    id: 3,
    name: 'Wheel',
    price: 2000,
  },
  {
    id: 4,
    name: 'Rear Glass',
    price: 200,
  },
];

const HomeScreen = () => {
  return (
  <View style={{
     borderTopWidth: 1,
    borderTopColor: '#EDEDED',
    shadowColor: 'black',
    flexDirection: 'row',
  }}>
  <Im
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
