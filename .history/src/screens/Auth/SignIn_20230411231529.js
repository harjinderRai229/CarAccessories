import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../../components';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
        style={styles.textInput}
      />
      <Text
        style={styles.signupText}
        onPress={() => navigation.navigate('Signup')}>
        New user? Sign up ?
      </Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  signupText: {
    fontSize: 13,
    color: 'blue',
    textAlign: 'right',
    margin: 10,
    marginRight: 20,
  },
});
