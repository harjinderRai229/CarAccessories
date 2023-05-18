import { StyleSheet, Text, View } from 'react-native';
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
      .then((responseJson) => {
        setData(responseJson);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        setRefreshing(false);
      });
  }, []);

  return (
    <View>
      <Text>Card Details</Text>
      {data.map((item, index) => (
        <Text key={index}>{item.prodName}</Text>
      ))}
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({});
