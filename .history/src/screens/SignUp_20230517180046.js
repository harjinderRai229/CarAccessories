import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const SignUp = () => {
  const [fname, setName] = useState('');
  const [lname, setLastName] = useState('');
  const [mobile_num, setMobile] =useState('');
//   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://192.168.188.134:3000/user/create', {
        fname,
        lname,
        mobile_num,
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
        placeholder="LastName"
        value={fname}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Name"
        value={lname}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        placeholder="MobileNumber"
        value={mobile_num}
        onChangeText={text => setMobile(text)}
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
