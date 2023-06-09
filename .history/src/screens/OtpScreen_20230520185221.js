import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const OtpScreen = () => {
  const navigation = useNavigation();
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');

  const handleOtp1Change = (text) => {
    setOtp1(text);
    text && secondInput.current.focus();
  };

  const handleOtp2Change = (text) => {
    setOtp2(text);
    text ? thirdInput.current.focus() : firstInput.current.focus();
  };

  const handleOtp3Change = (text) => {
    setOtp3(text);
    text ? fourthInput.current.focus() : secondInput.current.focus();
  };

  const handleOtp4Change = (text) => {
    setOtp4(text);
    text ? fifthInput.current.focus() : thirdInput.current.focus();
  };

  const handleOtp5Change = (text) => {
    setOtp5(text);
    text ? sixthInput.current.focus() : fourthInput.current.focus();
  };

  const handleOtp6Change = (text) => {
    setOtp6(text);
    !text && fifthInput.current.focus();
  };

  const handleVerifyOtp = () => {
    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    // Perform OTP verification logic here
    if (otp === '123456') {
      Alert.alert('Success', 'OTP verified successfully');
      // Proceed to the next step after OTP verification
      navigation.navigate('Drawer1');
      console.log(otp);
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View style={styles.container}>
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
      <View style={{
        flex: 2,
        // backgroundColor: 'green',
      }}>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleVerifyOtp}>
          <Text style={styles.verifyBtnText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    // marginBottom: "30%",

    backgroundColor: 'yellow'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Otpcontainer: {
    flex: .5,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingRight:70
    // marginBottom: 20,
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
    // paddingHorizontal: 20,
    borderRadius: 5,
    width:"40%",
    alignItems:'center',
    justifyContent:'center'
  },
  verifyBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 40,
    borderRadius: 18,
    alignSelf: 'center',
    // marginTop: 50,
    backgroundColor:'black'
  },
});

export default OtpScreen;
