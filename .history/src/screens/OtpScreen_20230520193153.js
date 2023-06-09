import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
  const [timer, setTimer] = useState(30);
  const [otpResent, setOtpResent] = useState(false);

  useEffect(() => {
    // Start the countdown timer
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Reset the timer when it reaches 0
    if (timer === 0) {
      setTimer(60); // Reset the timer value
      // Implement your resend OTP code generation and sending process here
    }
  }, [timer]);
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
      setTimer(30);
      setOtpResent(true);
      console.log(otp);
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };
  const handleResendOtp = () => {
    // Implement your resend OTP code generation and sending process here
  
    // Start the timer and set otpResent to true
    setTimer(30);
    setOtpResent(true);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Image source={require('../assets/images/otp.jpeg')} style={{
        width: "80%",
        height: "80%",
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center'
        // marginBottom:5
        // padding:40
      }}/>
       
       <View style={{
        // flex:1,
        justifyContent:'flex-end',
        // marginBottom:10
        // backgroundColor:'red'
       }}>
        <Text style={styles.titleText}>Verification</Text>
       <Text style={{fontSize:13,color:'#000'}}>
        We will send you an otp on your register mobile number
        </Text>
       </View>
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
        <Text style={styles.timerText}>Time Remaining: {timer}s</Text>
        {otpResent && (
      <TouchableOpacity style={styles.buttonStyle} onPress={handleResendOtp}>
        <Text style={styles.verifyBtnText}>Resend OTP</Text>
      </TouchableOpacity>
    )}
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
    flex: 1.9,
    alignItems:"center",
    // marginBottom: "30%",
    // backgroundColor: 'yellow',
    // marginVertical:20
    height:"100%",
    marginTop:30
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000',
    textAlign:'center'
  },
  Otpcontainer: {
    flex: .5,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingRight:70
    marginTop: 40,
  },
  squareView: {
    width: 40,
    height: 40,
    borderWidth: 1,
    marginHorizontal: 5,
    marginLeft:10,
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
    marginTop: 5,
    backgroundColor:'black'
  },
});

export default OtpScreen;
