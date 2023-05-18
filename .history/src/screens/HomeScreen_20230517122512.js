import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native';
import Card from '../component/Card';
import AP
// const API_URL = 'http://192.168.188.134:3000/accessories/productList';

const HomeScreen = () => {
  // State variables
  const [data, setData] = useState([]); // Data array
  const [start, setStart] = useState(0); // Start value for API pagination
  const [limit, setLimit] = useState(10); // Limit value for API pagination
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state
  const [refreshing, setRefreshing] = useState(false); // Refreshing state
  const [hasMoreData, setHasMoreData] = useState(true); // Flag to track if there is more data to fetch

  // Function to fetch data from the API
  const fetchData = () => {
    setLoading(true);
    setRefreshing(true);

    const url = `${API_URL}?start=${start}&limit=${limit}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson && responseJson.data) {
          if (responseJson.data.length > 0) {
            setData((prevData) => [...prevData, ...responseJson.data]);
            setStart((prevStart) => prevStart + limit);
          } else {
            setHasMoreData(false);
          }
        }
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

  // Function to handle refresh action
  const handleRefresh = () => {
    setStart(0);
    setData([]);
    setHasMoreData(true);
    fetchData();
  };

  // useEffect hook to fetch data when the start value changes
  useEffect(() => {
    fetchData();
  }, [start]);

  // Function to render the loader component at the bottom of the list
  const renderFooter = () => {
    if (loading && hasMoreData) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return null;
    }
  };

  // Function to handle scroll event
  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom && hasMoreData && !loading) {
      fetchData();
    }
  };

  // Conditional rendering based on error and start value
  if (error && start === 0) {
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
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card item={item} />}
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        ListFooterComponent={renderFooter}
        onScroll={handleScroll}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
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
