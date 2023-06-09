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

  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [error, setError] = useState('');
  const [image, setImage] = useState(null);

  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
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
          <View style={styles.container1}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>OTP Verification</Text>
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
    marginVertical: 30,
    // paddingLeft:20
    // backgroundColor: '#2596be',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Otpcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  squareView: {
    width: 50,
    height: 50,
    borderWidth: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareTextInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: 20,
  },
  verifyBtn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  verifyBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
