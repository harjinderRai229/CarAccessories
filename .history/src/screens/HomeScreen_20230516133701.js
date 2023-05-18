import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
// import ProductCard from './ProductCard';
import Card from '../component/Card';
import { product } from '../utils/products';

const API_URL = 'http://192.168.1.100:3000/accessories/productList';




const HomeScreen = ({item}) => {
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

const styles = StyleSheet.create({
    columnWrapper: {
        justifyContent: 'space-between',
    },
})
export default HomeScreen;
