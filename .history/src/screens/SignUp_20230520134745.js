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
import React, { useState, useRef } from 'react';
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
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
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
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');

  const handleOtp1Change = (text) => {
    setOtp1(text)
    text && secondInput.current.focus();
  };

  const handleOtp2Change = (text) => {
    setOtp2(text)
    text ? thirdInput.current.focus() : firstInput.current.focus();
  };

  const handleOtp3Change = (text) => {
    setOtp3(text)
    text ? fourthInput.current.focus() : secondInput.current.focus();

  };

  const handleOtp4Change = (text) => {
    setOtp4(text)
    text ? fifthInput.current.focus() : thirdInput.current.focus();
  };

  const handleOtp5Change = (text) => {
    setOtp5(text)
    text ? sixthInput.current.focus() : fourthInput.current.focus();
  };

  const handleOtp6Change = (text) => {
    setOtp6(text)
    !text && fifthInput.current.focus();
  };

  const handleVerifyOtp = () => {
    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    // Perform OTP verification logic here
    if (otp === '123456') {

      Alert.alert('Success', 'OTP verified successfully');
      // Proceed to the next step after OTP verification
      setOtp(otp);
      console.log(otp);
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };


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
    // setOtp(text);
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
          <View style={styles.container}>
          <View>
            <Text>
              <Text >
                Otp verification
              </Text>
            </Text>
          </View>
            <View style={styles.Otpcontainer}>
              <View style={styles.squareView}>
                <TextInput
                  style={styles.squareTextInput}
                  value={otp1}
                  onChangeText={handleOtp1Change}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={firstInput}
                />
              </View>
              <View style={styles.squareView}>
                <TextInput
                  style={styles.squareTextInput}
                  value={otp2}
                  onChangeText={handleOtp2Change}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={secondInput}
                />
              </View>
              <View style={styles.squareView}>
                <TextInput
                  style={styles.squareTextInput}
                  value={otp3}
                  onChangeText={handleOtp3Change}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={thirdInput}
                />
              </View>
              <View style={styles.squareView}>
                <TextInput
                  style={styles.squareTextInput}
                  value={otp4}
                  onChangeText={handleOtp4Change}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={fourthInput}
                />
              </View>
              <View style={styles.squareView}>
                <TextInput
                  style={styles.squareTextInput}
                  value={otp5}
                  onChangeText={handleOtp5Change}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={fifthInput}
                />
              </View>
              <View style={styles.squareView}>
                <TextInput
                  style={styles.squareTextInput}
                  value={otp6}
                  onChangeText={handleOtp6Change}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={sixthInput}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.verifyBtn} onPress={handleVerifyOtp}>
              <Text style={styles.verifyBtnText}>Verify OTP</Text>
            </TouchableOpacity>
          </View>)}
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: '#fff',  
    
    // paddingLeft:20
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
    backgroundColor: '#fff',

    padding: 20,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    flexDirection:'row',

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
    backgroundColor: 'black', // Example background color, customize as needed
    marginVertical: 5, // Adjust the spacing between the square views
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  squareTextInput: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white', // Example text color, customize as needed
  },
  verifyBtn: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'blue', // Example background color, customize as needed
    borderRadius: 5,
    justifyContent: "center",
    alignItems: 'center',
    // width:"100%"
    // marginHorizontal:5
  },
  verifyBtnText: {
    color: 'white', // Example text color, customize as needed
    fontSize: 16,
    fontWeight: 'bold',
  },
});