import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import Button from '../component/CommonButton';
import axios from 'axios';
import { connect , useDispatch } from 'react-redux';
import { setAccessToken, signupSuccess } from '../redux/action/Action';


const SignUp = ({ signupSuccess }) => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [error, setError] = useState('');
  const [mobileNum, setMobile] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const handleSignUp = () => {
    if (name === '' || lname === '' || mobileNum === '' || password === '') {
      setError('Please fill in all fields.');
    } else if (mobileNum.length !== 10) {
      setError('Invalid phone number.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else {
      setError('');

      handleCreateUser();
    }
  };

  const showToast = () => {
    ToastAndroid.show('Sending OTP', ToastAndroid.SHORT);
  };

  // const handleCreateUser = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post('http://devcarapi.codezlab.com/user/create', {
  //       fname: name,
  //       lname,
  //       mobile_num: mobileNum,
  //       password,
  //     });
     
  //     console.log(response.data);
  //     if (response.data.status === 1) {
  //       setTimeout(() => {
  //         navigation.replace('OtpScreen', { userData: response.data.data });
  //         // showToast();
  //       }, 4000);
  //     } else {

  //       // Alert.alert(`${error.response.data}`);
  //       Alert.alert('Error', 'Failed to create user. Please try again.');
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       console.error(error.response.data);
  //       console.error(error.response.status);
  //       console.error(error.response.headers);
  //       Alert.alert('Error', 'Failed to create user. Please try again.');
  //     } else if (error.request) {
  //       console.error(error.request);
  //       Alert.alert('Error', 'No response from the server. Please check your internet connection.');
  //     } else {
  //       console.error('Error', error.message);
  //       Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleCreateUser = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://devcarapi.codezlab.com/user/create', {
        fname: name,
        lname,
        mobile_num: mobileNum,
        password,
      });
      console.log('response', response.data)
      const { accessToken, id, fname, lname, mobile_num } = response.data.data;

      const userObject = {
        accessToken,
        id,
        fname,
        lname,
        mobile_num,
      };
  
       const dataToken =await AsyncStorage.setItem('user', JSON.stringify(userObject));
  
      console.log(userObject.accessToken);
      
      dispatch(setAccessToken(userObject));
  
      if (response.data.status === 1) {
        setTimeout(() => {
          signupSuccess(response.data.data);
          navigation.replace('OtpScreen', { userData: response.data.data });
          setIsLoading(true);
        }, 2000);
      } else {
        Alert.alert('Error', 'Failed to create user. Please try again.');
      }
    } catch (error) {
      // Error handling code...
    } finally {
      setIsLoading(false);
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
          placeholder={'Last name'}
          icon={require('../assets/images/user.png')}
          value={lname}
          onChangeText={setLname}
        />

        <CustomTextInput
          placeholder={'Mobile number'}
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
          style={error ? null : styles.signUpButton}
        />
         {isLoading && <ActivityIndicator style={styles.loader} size="small" color="#000000" />}

        <Text style={[styles.text, styles.signInText]}>
          Already have an account?{' '}
          <Text style={styles.signInLink} onPress={() => navigation.navigate('Login')}>
            Sign In
          </Text>
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
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  signInText: {
    alignSelf: 'center',
  },
  signInLink: {
    color: 'blue',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  signUpButton: {
    marginTop: 20,
  },
});

export default SignUp;

