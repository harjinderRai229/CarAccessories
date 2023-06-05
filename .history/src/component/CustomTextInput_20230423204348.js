import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type, keyBoardType }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        // keyboardType='default'

        keyboardType={
          placeholder === 'Enter Your Number' ? 'numeric' : 'default'
        }
        secureTextEntry={type ? true : false}
        placeholderTextColor={'#000'}
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
  textInput: {},
});
