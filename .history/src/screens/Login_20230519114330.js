
import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Check if any field is empty
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    // Get user data from AsyncStorage
    try {
      const userData = await AsyncStorage.getItem('userData');
      const parsedUserData = JSON.parse(userData);

      // Check if user exists and password matches
      if (
        parsedUserData &&
        parsedUserData.email === email &&
        parsedUserData.password === password
      ) {
        Alert.alert('Success', 'User authenticated successfully');
        navigation.navigate('BottomNavigator');
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to authenticate user');
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput onChangeText={setEmail} value={email} />

      <Text>Password</Text>
      <TextInput onChangeText={setPassword} value={password} secureTextEntry />

      <Button title="Sign In" onPress={handleSignIn} />

      <Button
        title="Create an account"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default SignInScreen;