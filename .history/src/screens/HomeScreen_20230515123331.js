import React from 'react';
import { FlatList, View } from 'react-native';
// import ProductCard from './ProductCard';
import Card from '../component/Card';
const product = [
  {
    id: 1,
    name: 'Door Still Guard',
    image:require('../assets/images/st.jpeg'),
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
  {
    id: 5,
    name:'Mirror',
    price: 500,
  },
  {
    id : 6,
    name: 'Exuaste',
    price:1000,
  },
  {
    id: 7,
    
  }
];

const HomeScreen = () => {
  return (
  <View style={{
     borderTopWidth: 1,
    borderTopColor: '#EDEDED',
    shadowColor: 'black',
    flexDirection: 'row',
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
