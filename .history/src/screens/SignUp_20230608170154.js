import React, { useState, useContext } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { AuthContext } from '../AuthContext';
import Button from '../component/Button';

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [error, setError] = useState('');
  const [mobileNum, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);


  const handleSignUp = async () => {
    if (fname === '' || lname === '' || mobileNum === '' || password === '') {
      setError('Please fill in all fields.');
    } else if (mobileNum.length !== 10) {
      setError('Invalid phone number.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else {
      setError('');

      try {
        setIsLoading(true);
        const response = await signUp(mobileNum, password, fname, lname);
        if (response.status === 1) {
          showToast();
          console.log(response);
          navigation.navigate('OtpScreen');
        }

      } catch (error) {
        Alert.alert('Error', 'Failed to create user. Please try again.');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const showToast = () => {
    ToastAndroid.show('User created successfully.', ToastAndroid.SHORT);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Create New Account</Text>

        <CustomTextInput
          placeholder={'First name'}
          icon={require('../assets/images/user.png')}
          value={fname}
          iconName={'user'}
          size={26}
          color={"#000"}
          onChangeText={setFname}
        />

        <CustomTextInput
          placeholder={'Last name'}
          icon={require('../assets/images/user.png')}
          value={lname}
          iconName={'user'}
          size={26}
          color={"#000"}
          onChangeText={setLname}
        />

        <CustomTextInput
          placeholder={'Mobile number'}
          icon={require('../assets/images/phone.png')}
          keyboardType={'numeric'}
          value={mobileNum}
          maxLength={10}
          iconName={'mobile'}
          size={26}
          color={"#000"}
          onChangeText={setMobile}
        />

<View style={{ width: '100%', }}>
          <CustomTextInput
            placeholder={'Password'}
            value={password}
            onChangeText={password => setPassword(password)}
            type={'password' ? !showPassword : showPassword}
            iconName={'lock'}
            size={26}
            color={"#000"}
            placeholderTextColor={'red'}

          />
          <TouchableOpacity
            style={styles.passwordIcon}
            onPress={handleTogglePasswordVisibility}
          >
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
          <View style={{
            marginRight: 26,
            // marginTop:3
            // borderWidth:1,
            // backgroundColor:'blue'
          }}>
            <Text style={{
              color: 'blue',
              textAlign: 'right',
              marginTop: 3
            }}>forgot password ?</Text>
          </View>
        </View>

        {error !== '' && <Text style={styles.error}>{error}</Text>}

        <Button
          title={'Sign Up'}
          bgColor={'#000'}
          textColor={'#fff'}
          onPress={handleSignUp}
          style={error ? null : styles.signUpButton}
        />
        {isLoading && <ActivityIndicator style={styles.loader} size="small" color="#000000" />}

        <Text style={[styles.text, styles.signInText]}>
          Already have an account?{' '}
          <Text style={styles.signInLink} onPress={() => navigation.navigate('Login')}>
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  title: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontWeight: '800',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  signInText: {
    alignSelf: 'center',
  },
  signInLink: {
    color: 'blue',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  signUpButton: {
    marginTop: 20,
  },
});

export default SignUp;

