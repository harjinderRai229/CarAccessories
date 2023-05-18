import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const SignUp = () => {
  const [fname, setName] = useState('');
  const [lname, setLastName] = useState('');
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otp, setOtp] = useState('');

  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://192.168.1.100:3000/user/create', {
        fname,
        lname,
        mobile_num: mobileNum,
        password,
      });
      // Handle the response accordingly
      console.log(response.data);
      // Show the OTP screen
      setShowOtpScreen(true);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const handleVerifyOtp = () => {
    // Perform OTP verification here
    // You can use the otp and mobileNum values for verification
    if (otp === '123456') {
      Alert.alert('Success', 'OTP verified successfully');
      // Proceed to the next step after OTP verification
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View>
      {!showOtpScreen ? (
        <>
          <TextInput
            placeholder="First name"
            value={fname}
            onChangeText={text => setName(text)}
          />
          <TextInput
            placeholder="Last Name"
            value={lname}
            onChangeText={text => setLastName(text)}
          />
          <TextInput
            placeholder="Mobile Number"
            value={mobileNum}
            onChangeText={text => setMobile(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button title="Create User" onPress={handleCreateUser} />
        </>
      ) : (
        <View>
          <TextInput
            placeholder="Enter OTP"
            value={otp}
            onChangeText={text => setOtp(text)}
          />
          <Button title="Verify OTP" onPress={handleVerifyOtp} />
        </View>
      )}
    </View>
  );
};

export default SignUp;
