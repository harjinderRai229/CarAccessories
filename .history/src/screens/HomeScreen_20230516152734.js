import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import Card from '../component/Card';
import { product } from '../utils/products';
const API_URL = 'http://192.168.1.100:3000/accessories/productList';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

//   const fetchData = () => {
//     setRefreshing(true);
//     fetch(API_URL)
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setData(responseJson.data);
//         setLoading(false);
//         setError(false);
//         setRefreshing(false);
//         console.log('::::::::::::::::::DATA::::::::::::::::::::', responseJson.data)
//       })
//       .catch((error) => {
//         setError(true);
//         setLoading(false);
//         setRefreshing(false);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleRefresh = () => {
//     fetchData();
//   };

//   if (loading && !refreshing) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text>Error occurred while fetching data.</Text>
//       </View>
//     );
//   }

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={({ item }) => <Card item={item} />}
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
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
});

export default HomeScreen;
