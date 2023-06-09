import React, { useState, useContext } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { AuthContext } from '../AuthContext';
import Button from '../component/Button';

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [error, setError] = useState('');
  const [mobileNum, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (fname === '' || lname === '' || mobileNum === '' || password === '') {
      setError('Please fill in all fields.');
    } else if (mobileNum.length !== 10) {
      setError('Invalid phone number.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else {
      setError('');

      try {
        setIsLoading(true);
        const response = await signUp(mobileNum, password, fname, lname);
        if(response.status)
        showToast();
        console.log(response);
        navigation.navigate('OtpScreen');
      } catch (error) {
        Alert.alert('Error', 'Failed to create user. Please try again.');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const showToast = () => {
    ToastAndroid.show('User created successfully.', ToastAndroid.SHORT);
  };


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Create New Account</Text>

        <CustomTextInput
          placeholder={'First name'}
          icon={require('../assets/images/user.png')}
          value={fname}
          onChangeText={setFname}
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

