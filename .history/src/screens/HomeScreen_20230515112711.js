import React from 'react';
import { FlatList } from 'react-native';
// import ProductCard from './ProductCard';
import Card from '../component/Card';
const product = [
  {
    id: 1,
    name: 'Door Still Guard',
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

const App = () => {
  return (
    <FlatList
      data={product}
      renderItem={({ item }) => <ProductCard item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default App;
