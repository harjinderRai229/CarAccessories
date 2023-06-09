import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type, keyboardType, maxLength }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        keyboardType={keyboardType === 'nu'}
        secureTextEntry={type ? true : false}
        placeholderTextColor="#000"
      />
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
});
