import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import Button from '../component/CommonButton';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [error, setError] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (name === '' && lname === '' && mobileNum === '' && password === '') {
      setError('All fields are required.');
    } else if (name === '' || lname === '' || mobileNum === '' || password === '') {
      setError('Please fill in all fields.');
    } else if (mobileNum.length !== 10) {
      setError('Invalid phone number.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else {
      setError(true);
      handleCreateUser();
    }
  };

  const showToast = () => {
    ToastAndroid.show('Sending OTP', ToastAndroid.SHORT);
  };

  const handleCreateUser = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://192.168.120.134:3000/user/create', {
        fname: name,
        lname,
        mobile_num: mobileNum,
        password,
      });

      console.log(response.data);

      if (response.data.status === true) {
        navigation.navigate('OtpScreen');
        showToast();
      } else {
        Alert.alert('Error', 'Failed to create user. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
        Alert.alert('Error', 'Failed to create user. Please try again.');
      } else if (error.request) {
        console.error(error.request);
        Alert.alert('Error', 'No response from the server. Please check your internet connection.');
      } else {
        console.error('Error', error.message);
        Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Create New Account</Text>

        <CustomTextInput
          placeholder={'First name'}
          icon={require('../assets/images/user.png')}
          value={name}
          onChangeText={setName}
        />

        <CustomTextInput
          placeholder={'Enter Last Name'}
          icon={require('../assets/images/user.png')}
          value={lname}
          onChangeText={setLname}
        />

        <CustomTextInput
          placeholder={'Enter Your Number'}
          icon={require('../assets/images/phone.png')}
          keyboardType={'numeric'}
          value={mobileNum}
          maxLength={10}
          onChangeText={setMobile}
        />

        <CustomTextInput
          placeholder={'Password'}
          type={'password'}
          icon={require('../assets/images/lock.png')}
          value={password}
          onChangeText={setPassword}
        />

        {error !== '' && <Text style={styles.error}>{error}</Text>}

        <Button
          title={'Sign Up'}
          bgColor={'#000'}
          textColor={'#fff'}
          onPress={handleSignUp}
        />

        {loading && <ActivityIndicator size="large" color="#000" />}

        <Text
          style={[styles.text, styles.signInText]}
        
        >
          Already have an account ? <Text style={{color:'blue', fontSize:18}}  onPress={() => {
            navigation.navigate('Login');
          }}>Sign In</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  title: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontWeight: '800',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  signInText: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
