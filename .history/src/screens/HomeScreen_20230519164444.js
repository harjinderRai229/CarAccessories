import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, View } from 'react-native';
import Card from '../component/Card';
import { API_URL } from '../utils/helper';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchData = () => {
    setLoading(true);
    const url = `${API_URL}?start=${start}&limit=10`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson && responseJson.data) {
          if (responseJson.data.length > 0) {
            setData((prevData) => [...prevData, ...responseJson.data]);
            setStart((prevStart) => prevStart + responseJson.data.length);
          } else {
            setHasMoreData(false);
          }
        }
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  };

  const handleRefresh = () => {
    setStart(0);
    setData([]);
    setHasMoreData(true);
    fetchData();
  };

  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom && hasMoreData && !loading) {
      fetchData();
    }
  };

  const renderFooter = () => {
    if (loading && hasMoreData) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return null;
  };

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
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListFooterComponent={renderFooter}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Adjust the throttle value as per your requirements
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
