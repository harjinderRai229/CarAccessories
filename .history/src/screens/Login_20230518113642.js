import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  // const navigation =useNavigation();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.100:3000/user/login', {
        mobile_num: mobileNum,
        password,
      });
      // Handle the response accordingly
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password');
  };

  const handleCreateAccount = () => {
    // Handle create account logic here
    // NavigationContainer.navigate()
    console.log('Create account');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNum}
        onChangeText={text => setMobile(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={{}} onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.link} onPress={handleForgotPassword}>
          Forgot Password?
        </Text>
        <Text style={styles.link} onPress={handleCreateAccount}>
          Create New Account
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
  },
  linksContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;
