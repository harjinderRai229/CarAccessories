import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library of your choice

const CustomTextInput = ({ value, onChangeText, placeholder, iconName, type, keyboardType, maxLength }) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={size} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        keyboardType={keyboardType}
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
    borderRadius: 6,
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
    color:'black',
    width: '80%',
  },
});
