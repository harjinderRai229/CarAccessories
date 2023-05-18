import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // Your API call logic here
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

    // Call the login function
    handleLogin();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password');
  };

  const handleCreateAccount = () => {
    // Handle create account logic here
    // navigation.navigate('SignUp');
    console.log('Create account');
  };

  return (
    <View style={styles.container}>
      {/* <Image source={Logo} style={styles.logo} /> */}

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNum}
        onChangeText={(text) => setMobile(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.loginButton} onPress={han}>
        <Text style={styles.loginButtonText}>Login</Text>
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
  logo: {
    marginBottom: 30,
    width: 150,
    height: 150,
    resizeMode: 'contain',
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
  loginButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: 'blue',
    borderRadius: 25,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
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
