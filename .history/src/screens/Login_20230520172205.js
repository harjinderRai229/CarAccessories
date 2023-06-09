import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomTextInput = ({ value, onChangeText, placeholder, icon, icon2, type, keyboardType, maxLength }) => {
  const isValidMobileNumber = (mobileNum) => {
    // Regular expression to validate the mobile number format
    const mobileNumberPattern = /^[0-9]{10}$/;
    return mobileNumberPattern.test(mobileNum);
  };

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        keyboardType={keyboardType}
        secureTextEntry={type === 'password'}
        placeholderTextColor="#000"
      />
      {type === 'password' && (
        <TouchableOpacity style={styles.passwordIcon}>
          <Icon name={'eye'} size={20} color="gray" />
        </TouchableOpacity>
      )}
      {type === 'mobile' && !isValidMobileNumber(value) && (
        <Icon name={'exclamation-circle'} size={20} color="red" style={styles.errorIcon} />
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '85%',
    height: 58,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    height: 45,
    width: '80%',
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,
  },
  errorIcon: {
    marginLeft: 10,
  },
});
