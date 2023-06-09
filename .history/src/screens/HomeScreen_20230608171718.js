import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, TextInput, View } from 'react-native';
import Card from '../component/Card';
import api from '../utils/api';
import { AuthContext } from '../AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const { apiResponse, fetchApiResponse } = useContext(AuthContext);
  const fetchData = () => {
    setIsLoading(true);
    const endpoint = 'accessories/productList';
    const url = `${endpoint}?start=${start}&limit=10`;

    api.get(url)
      .then((response) => {
        const responseJson = response.data;
        const headers = response.headers; // Access the headers
        // console.log(headers); // Log the headers to the console

        if (responseJson && responseJson.data) {
          if (responseJson.data.length > 0) {
            setData((prevData) => [...prevData, ...responseJson.data]);
            setStart((prevStart) => prevStart + responseJson.data.length);
          } else {
            setHasMoreData(false);
          }
        }
        setIsLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
      });
  };

  const handleRefresh = () => {
    setStart(0);
    setData([]);
    setHasMoreData(true);
    fetchData();
  };
  const handleOpenDrawer = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);


  
  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom && hasMoreData && !isLoading) {
      fetchData();
    }
  };

  const renderFooter = () => {
    if (isLoading && hasMoreData) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return null;
  };

  useEffect(() => {
    fetchData();
  }, [start]);

  if (error && start === 0) {
    return (
      <View style={styles.errorContainer}>
        <Image source={require('../assets/images/noData.png')} style={styles.errorImage} />
        
      </View>
    );
  }

  if (isLoading && data.length === 0) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
    <View style={styles.searchContainer}>
            <TouchableOpacity onPress={handleOpenDrawer}>
              <Icons name="menu" size={25} color="#000" />
            </TouchableOpacity>
            <View style={styles.searchInputContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                // value={searchQuery}
                placeholderTextColor={'gray'}
                // onChangeText={(text) => setSearchQuery(text)}
              />
              <View
                style={{
                  backgroundColor: '#f15c08',
                  height: 40,
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              >
                <TouchableOpacity  >
                  <Icons name="search" size={20} color="#fff" style={styles.searchIcon} />
                </TouchableOpacity>
              </View>
            </View>
            
          </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListFooterComponent={renderFooter}
        onRefresh={handleRefresh}
        refreshing={isLoading && start === 0}
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
