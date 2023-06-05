import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../component/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import Button from '../component/CommonButton';
import axios from 'axios';
const SignUp = () => {
  // const navigation = useNavigation();
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [error, setError] = useState('');
  const [image, setImage] = useState(null);
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
      handleCreateUser();
    }
  };
  
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showOtpScreen, setShowOtpScreen] = useState(true);
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const showToast = () => {
    ToastAndroid.show('Sending Otp', ToastAndroid.SHORT);
  };
  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://192.168.120.134:3000/user/create', {
        fname: name,
        lname,
        mobile_num: mobileNum,
        password,
      });
      // Handle the response accordingly
      console.log(response.data);
      // Show the OTP screen
      showToast();
      setShowOtpScreen(true);
    } catch (error) {
      // Handle error
      // Alert.alert('Already', 'Account');
      console.error(error);

    }
  };
  const handleOtpChange = (text) => {
    setOtp(text);
  };

  const handleVerifyOtp = () => {
    // Perform OTP verification here
    // You can use the otp and mobileNum values for verification
    if (otp === '123456') {
      Alert.alert('Success', 'OTP verified successfully');
      // setShowOtpScreen(false);
      navigation.navigate('Drawer1');

      // Proceed to the next step after OTP verification
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "20%" }}>
        {!showOtpScreen ? (
          <>
            <Text style={styles.text}>Create New Account</Text>
            <CustomTextInput
              placeholder={'Enter Your Name'}
              icon={require('../assets/images/user.png')}
              value={name}
              onChangeText={setName}
            />
            <CustomTextInput
              placeholder={'Enter  Last Name'}
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
            <Text
              style={[
                styles.text,
                {
                  fontSize: 18,
                  marginTop: 20,
                  textDecorationLine: 'underline',
                },
              ]}
              onPress={() => {
                navigation.goBack();
              }}>
              Already Have an account / Sign In
            </Text>
          </>
        ) : (
          <View style={styles.container1}>
  <View style={styles.squareView} />
  <View style={styles.squareView} />
  <View style={styles.squareView} />
  <View style={styles.squareView} />
  <View style={styles.squareView} />
  <View style={styles.squareView} />

  <TextInput
    style={styles.input}
    value={otp}
    onChangeText={handleOtpChange}
    keyboardType="numeric"
    maxLength={6}
  />
  <TouchableOpacity style={styles.verifyBtn} onPress={handleVerifyOtp}>
    <Text style={styles.verifyBtnText}>Verify OTP</Text>
  </TouchableOpacity>
</View>
)}
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30
    // backgroundColor: '#2596be',
  },
  img: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 100,
  },
  text: {
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
    marginBottom: 10,
  },
  imgPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 50,
  },
  Otpcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  VerifyBtn: {
    backgroundColor: '#C391DC',
    // width:"84%",
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  squareView: {
    width: 50,
    height: 50,
    backgroundColor: 'red', // Example background color, customize as needed
    marginVertical: 5, // Adjust the spacing between the square views
  },
  input: {
    // Add your input styles here
  },
  verifyBtn: {
    // Add your verify button styles here
  },
  verifyBtnText: {
    // Add your verify button text styles here
  },
  // container1:{
  //   flexDirection:'row'
  // },
});