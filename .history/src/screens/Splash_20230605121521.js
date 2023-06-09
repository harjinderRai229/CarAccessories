import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    checkAccessToken();
  }, []);

  const checkAccessToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('user');
      const accessToken = userToken ? JSON.parse(userToken).accessToken : null;

      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        if (accessToken) {
          navigation.replace('Drawer1');
        } else {
          navigation.replace('Login');
        }
      });
    } catch (error) {
      console.error('Error checking access token:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/11.jpg')}
        resizeMode='contain'
        style={[styles.logo, { opacity: logoOpacity }]}
      />

      <Text style={styles.subTitle}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginBottom: 20,
    width: '50%',
    height: '50%',
  },
  subTitle: {
    fontSize: 20,
    color: '#000',
    opacity: 0.5,
  },
});

export default SplashScreen;
