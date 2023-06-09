import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Test = () => {
    const [showToken , setShowToken ] = use
  useEffect(() => {
    const getToken = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const userObject = JSON.parse(storedUser);
          const { accessToken } = userObject;
          console.log(accessToken);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getToken();
  }, []);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
