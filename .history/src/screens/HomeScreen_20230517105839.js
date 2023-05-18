import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native';
import Card from '../component/Card';

const API_URL = 'http://192.168.188.134:3000/accessories/productList';

const HomeScreen = () => {
  const [data, setData] = useState([]); // data fetching
  const [page, setPage] = useState(1); // current page number
  const [loading, setLoading] = useState(true); // loader when the data is fetching
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setRefreshing(true);

    fetch(`${API_URL}?page=${page}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setData((prevData) => [...prevData, ...responseJson.data]);
        setLoading(false);
        setError(false);
        setRefreshing(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        setRefreshing(false);
      });
  };

  const handleRefresh = () => {
    setPage(1);
    setData([]);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  if (loading && !refreshing && page === 1) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error && page === 1) {
    return (
      <View style={styles.errorContainer}>
        <Image source={require('../assets/images/noData.png')} style={styles.errorImage} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        onEndReached={fetchData}
        onEndReachedThreshold={0.1}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorImage: {
    width: 200,
    height: 200,
  },
});

export default HomeScreen;
