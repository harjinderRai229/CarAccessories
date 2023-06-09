import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../actions/Actions';
import React, { useState, useEffect } from 'react';
import CustomTextInput from '../component/CustomTextInput';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../utils/api';

const Login = () => {
  const dispatch = useDispatch();
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [badMobileNum, setBadMobileNum] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    if (mobileNum === '') {
      setBadMobileNum(true);
    } else if (!isValidMobileNumber(mobileNum)) {
      setBadMobileNum(true);
    } else {
      setBadMobileNum(false);
    }

    if (password === '') {
      setBadPassword(true);
    } else if (password.length < 8 || !isStrongPassword(password)) {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }

    setLoading(true);
    handleLogin();
  };

  const isStrongPassword = (password) => {
    const uppercasePattern = /[A-Z]/;
    const numberPattern = /[0-9]/;

    return (
      password.length >= 8 &&
      uppercasePattern.test(password) &&
      numberPattern.test(password)
    );
  };

  const handleLogin = async () => {
    try {
      const response = await api.post('/user/login', {
        mobile_num: mobileNum,
        password,
      });

      const accessToken = response.data.data.accessToken;
      const userId = response.data.data.id;
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('userId', userId);
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      dispatch(setAccessToken(accessToken));

      // Navigate to the desired screen upon successful login
      // navigation.navigate('HomeScreen');
    } catch (error) {
      console.error(error);
      // Handle error
      Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    let hideErrorTimeout = null;
    if (badPassword || badMobileNum) {
      hideErrorTimeout = setTimeout(() => {
        setBadPassword(false);
        setBadMobileNum(false);
      }, 4000);
    }
    return () => {
      clearTimeout(hideErrorTimeout);
    };
  }, [badPassword]);

  const isValidMobileNumber = (mobileNum) => {
    const mobileNumberPattern = /^[0-9]{10}$/;
    return mobileNumberPattern.test(mobileNum);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor={'#2596be'} />
      <Text style={styles.text}>Login</Text>
      <CustomTextInput
        placeholder={'Mobile number'}
        value={mobileNum}
        keyboardType={'number-pad'}
        onChangeText={(mobileNum) => setMobile(mobileNum)}
        icon={require('../assets/images/user.png')}
        placeholderTextColor={'red'}
      />
      {badMobileNum && (
        <Text style={styles.errorText}>
          {isValidMobileNumber(mobileNum)
            ? 'Please enter a mobile number'
            : 'Please enter a valid mobile number'}
        </Text>
      )}
      <View style={{ width: '100%' }}>
        <CustomTextInput
          placeholder={'Password'}
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={!showPassword}
          icon={require('../assets/images/lock.png')}
          placeholderTextColor={'red'}
        />
        <TouchableOpacity
          style={styles.passwordIcon}
          onPress={handleTogglePasswordVisibility}
        >
          <Icon
            name={showPassword ? 'eye' : 'eye-slash'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {badPassword && (
        <View style={styles.errorContainer1}>
          <Text style={styles.errorText1}>
            Password must be at least 8 characters long and contain:
          </Text>
          <Text style={styles.errorText1}>
            - at least one uppercase letter
          </Text>
          <Text style={styles.errorText1}>
            - one numeric digit
          </Text>
        </View>
      )}

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={{ color: 'red', marginTop: 10 }}>Forgot password?</Text>
      </TouchableOpacity>
      <Button
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={validate}
        disabled={loading}
      />
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
      <TouchableOpacity
        style={[
          styles.text,
          {
            fontSize: 18,
            marginTop: 20,
            textDecorationLine: 'underline',
          },
        ]}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <Text>Create New Account?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontWeight: '800',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginLeft: 40,
    fontWeight: '800',
  },
  passwordIcon: {
    position: 'absolute',
    top: 50,
    right: 40,
  },
  errorContainer1: {
    marginTop: 10,
    marginLeft: 40,
  },
  errorText1: {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 12,
  },
});
