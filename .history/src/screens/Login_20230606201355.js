import React, { useState, useContext } from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import Button from '../component/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (mobileNum === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
      try {
        setIsLoading(true);
        const response = await login(mobileNum, password);
        if (response.success === 1) {
          await AsyncStorage.setItem('token', response.accesstoken);
          // navigation.replace('Home');
          console.log('Logged in successfully');
        } else {
          Alert.alert('Error', 'Invalid credentials. Please try again.');
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to log in. Please try again.');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const showToast = () => {
    ToastAndroid.show('Logging in', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <CustomTextInput
        placeholder={'Mobile number'}
        icon={require('../assets/images/phone.png')}
        keyboardType={'numeric'}
        value={mobileNum}
        onChangeText={setMobile}
      />

      <CustomTextInput
        placeholder={'Password'}
        type={'password'}
        icon={require('../assets/images/lock.png')}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={handleLogin}
        style={styles.loginButton}
      />

      {isLoading && <ActivityIndicator style={styles.loader} size="small" color="#000000" />}

      <Text style={[styles.text, styles.signUpText]}>
        Don't have an account?{' '}
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontWeight: '800',
    marginBottom: 20,
  },
  loginButton: {
    marginTop: 20,
  },
  loader: {
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  signUpText: {
    alignSelf: 'center',
  },
  signUpLink: {
    color: 'blue',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default Login;
