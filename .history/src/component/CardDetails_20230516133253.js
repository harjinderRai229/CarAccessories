import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

const API_URL = 'http://192.168.1.100:3000/accessories/productList';

const CardDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseJson.data) => {
        setData(responseJson);
        setLoading(false);
        setError(false);
        console.log('::::::::::::::::::DATA::::::::::::::::::::', responseJson)
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        setRefreshing(false);
      });
  }, []);

  const renderProduct = ({ item }) => (
    <Text style={{color:'black' ,fontSize:30}}>{item.prodName}</Text>
  );

  return (
    <View>
      <Text>Card Details</Text>
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CardDetails;
