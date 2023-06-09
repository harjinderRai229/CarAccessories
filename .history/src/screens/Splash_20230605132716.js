import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { setSession } from '../redux/action/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  const dispatch =us
  const logoOpacity = new Animated.Value(0);
  const accessToken = useSelector(state => state.accessToken); // Replace 'accessToken' with your actual state key

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  useEffect(() => {
    checkLoggedIn();
  }, []);

  // const checkAccessToken = () => {
  //   Animated.timing(logoOpacity, {
  //     toValue: 1,
  //     duration: 1500,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     if (accessToken) {
  //       navigation.replace('Drawer1');
  //     } else {
  //       navigation.replace('Login');
  //     }
  //   });
  // };

  const checkLoggedIn = async () => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        const isLoggedIn = user !== null;

        if (isLoggedIn) {
          // User is logged in
          const userObject = JSON.parse(user);
          dispatch(setSession(userObject));
          navigation.replace('Drawer1'); // Replace with your desired screen after login
        } else {
          // User is not logged in
          navigation.replace('Login'); // Replace with your login screen
        }
      } catch (error) {
        console.error(error);
      }
    });
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
