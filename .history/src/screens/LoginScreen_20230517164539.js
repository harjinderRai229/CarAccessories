import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
// import { Card } from 'react-native-elements';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}>
        {/* <ModelView
          model={{
            uri: 'path/to/your/model', // Replace with the actual path to your 3D model file
          }}
          scale={0.01} // Adjust the scale of the model to fit your screen
          rotate={true} // Enable rotation of the model
          autoPlay={true} // Auto-play animations, if any
          style={styles.modelView}
        /> */}
      </View>
      <Card containerStyle={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  modelContainer: {
    height: 400,
    width: '80%',
    marginBottom: 20,
  },
  modelView: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  input: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default LoginScreen;
