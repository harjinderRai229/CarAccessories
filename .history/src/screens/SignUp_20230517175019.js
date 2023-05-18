import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const []
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://192.168.188.134:3000/user/create', {
        name,
        email,
        password,
      });
      // Handle the response accordingly
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Create User" onPress={handleCreateUser} />
    </View>
  );
};

export default SignUp;
