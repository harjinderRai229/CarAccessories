import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const OtpScreen = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (text) => {
    setOtp(text);
  };

  const handleVerify = () => {
    // Add your verification logic here
    if (otp === '123456') {
      alert('OTP verified!');
    } else {
      alert('Incorrect OTP!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={handleOtpChange}
        keyboardType="numeric"
        maxLength={6}
      />
      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default OtpScreen;
