import React, { useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const OtpScreen = () => {
  const otpInputs = Array(6).fill(useRef(null));

  const handleOtpChange = (index, text) => {
    if (text.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].current.focus();
    }
  };

  const handleVerifyOtp = () => {
    const otp = otpInputs.map((input) => input.current.value).join('');
    // Perform OTP verification logic here
  };

  return (
    <View style={styles.container}>
     <View>
     {otpInputs.map((input, index) => (
        <TextInput
          key={index}
          ref={input}
          style={styles.input}
          onChangeText={(text) => handleOtpChange(index, text)}
          keyboardType="numeric"
          maxLength={1}
        />
      ))}

     </View>
      <TouchableOpacity style={styles.verifyBtn} onPress={handleVerifyOtp}>
        <Text style={styles.verifyBtnText}>Verify OTP</Text>
      </TouchableOpacity>
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
    width: 50,
    height: 50,
    borderWidth: 1,
    marginVertical: 5,
    textAlign: 'center',
  },
  verifyBtn: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue', // Example background color, customize as needed
    borderRadius: 5,
  },
  verifyBtnText: {
    color: 'white', // Example text color, customize as needed
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OtpScreen;
