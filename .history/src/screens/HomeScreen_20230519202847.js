import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, View } from 'react-native';
import Card from '../component/Card';
import { API_URL } from '../utils/helper';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchData = () => {
    setIsLoading(true);
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

  const checkSession = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const userId = await AsyncStorage.getItem('userId');
  
    if (accessToken && userId) {
      // Session exists, the user is logged in with a unique access token
      // You can perform authenticated actions or continue with the app flow
    } else {
      // Session does not exist, the user is not logged in or the access token or user ID is missing
      // You can navigate to the login screen or perform any other desired logic
    }
  };
  When logging out or ending the session, remove the access token and user ID from AsyncStorage:
  javascript
  Copy code
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const handleLogout = async () => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('userId');
    // Perform any other logout logic
  };
  By saving both the access token and user ID to AsyncStorage, you can maintain the logic that each user has a unique access token. This allows you to verify the session and perform authenticated actions based on the presence of both the access token and user ID in AsyncStorage.
  
  
  
  
  
  User
  now , after that the user wants click on addtocart , then check here the user is login or not , or has accesstoken ,userId 
  ChatGPT
  
  3 / 3
  
  To check if the user is logged in or has an access token and user ID when the user clicks on "Add to Cart," you can follow these steps:
  
  Implement the logic to check the session or verify the presence of the access token and user ID in a relevant function or component that handles the "Add to Cart" action.
  
  Retrieve the access token and user ID from AsyncStorage as shown in the previous steps:
  
  javascript
  Copy code
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  // Inside the function or component handling "Add to Cart"
  const checkSession = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const userId = await AsyncStorage.getItem('userId');
  
    if (accessToken && userId) {
      // Session exists, the user is logged in with a unique access token
      // Perform the "Add to Cart" action or continue with the desired logic
    } else {
      // Session does not exist, the user is not logged in or the access token or user ID is missing
      // Display a message or navigate to the login screen to prompt the user to log in
    }
  };
  Call the checkSession function when the user clicks on the "Add to Cart" button or triggers the "Add to Cart" action:
  javascript
  Copy code
  // Inside the component or function handling the "Add to Cart" action
  const handleAddToCart = () => {
    checkSession(); // Call the session check function
  
    // Perform the "Add to Cart" action or continue with the desired logic
  };
  By implementing this logic, you can check if the user is logged in or has an access token and user ID before allowing them to proceed with the "Add to Cart" action. If the session is not present or the access token and user ID are missing, you can prompt the user to log in or take any other necessary action.
  
  
  
  
  
  
  

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
