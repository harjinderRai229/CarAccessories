import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Dra');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
      source={require('../assets/images/11.jpg')} 
      resizeMode='contain'
      style={[styles.logo, { opacity: logoOpacity }]}/>

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
    width:"50%",
    height:"50%"
  },
  subTitle: {
    fontSize: 20,
    color: '#000',
    opacity: 0.5,
  },
});

export default SplashScreen;