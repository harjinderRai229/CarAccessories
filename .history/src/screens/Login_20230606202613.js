import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { AuthContext } from '../AuthContext';

const Login = () => {
  const { login, loading, error } = useContext(AuthContext);
  const [mobileNum, setMobileNum] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (mobileNum === '' || password === '') {
        Alert.alert('Error', 'Please fill in all fields.');
        return;
      }

      const response = await login(mobileNum, password);

      if (response.status === 1) {
        // Login successful
        // Do something after successful login
        console.log('Login successful');
      } else {
        // Login failed
        Alert.alert('Error', response.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to log in. Please try again.');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNum}
        onChangeText={setMobileNum}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      {loading && <ActivityIndicator style={styles.loader} size="small" color="#000000" />}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:''
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loader: {
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
