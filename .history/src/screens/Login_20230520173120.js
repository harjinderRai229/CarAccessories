import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../component/CustomTextInput';
// import CommonButton from '../component/CommonButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
const Login = () => {
  const navigation = useNavigation();
  // const [email, setEmail] = useState('');
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [badMobileNum, setBadMobileNum] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  // const [isValidMobileNum, setIsValidMobileNum] = useState('');
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userId, setUserId] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const validate = () => {
    if (mobileNum === '') {
      setBadMobileNum(true);
    }
    else if (!isValidMobileNumber(mobileNum)) {
      setBadMobileNum(true);
    } else {
      setBadMobileNum(false);
    }

    if (password === '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    setLoading(true);
    handleLogin();
  };


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.120.134:3000/user/login', {
        mobile_num: mobileNum,
        password,
      });
      // Handle the response accordingly
      Alert.alert("login")
      // lo();
      // navigation.navigate('Drawer1')
      const accessToken = response.data.data.accessToken;
      const userId = response.data.data.id;
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('userId', userId);
      console.log(response.data);
      //change here some code 
      setAccessToken(accessToken);
      setUserId(userId);
      // navigation.navigate('HomeScreen')
    } catch (error) {
      // Handle error
      console.error(error);
    } 
    finally{
      setLoading(false);
    }
  };
  const lo = () => {
    navigation.navigate('SignUp')
  }

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password');
  };

  const handleCreateAccount = () => {
    // Handle create account logic here
    // navigation.navigate('SignUp');
    console.log('Create account');

  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  // const isValidEmail = email => {
  //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // };
  // const getData = async () => {
  //   const mEmail = await AsyncStorage.getItem('EMAIL');
  //   console.log(mEmail);
  //   const mPass = await AsyncStorage.getItem('PASSWORD');
  //   const mToken = await AsyncStorage.getItem('TOKEN');
  //   // console.log('token :::::::::::::::::::::: login ', mToken);
  //   if (email === mEmail && password === mPass )  {
  //     // navigation.dispatch('DrawerNavigator');
  //     navigation.navigate('BottomNavigator');
  //     setEmail('');
  //     setPassword('');
  //     setLoading(false);
  //     // setToken(mToken);
  //     // console.log(":::::::::T:O:K:E:N:::::::::::::",mToken)
  //     // navigation.navigate('');
  //   } else if (email != mEmail) {
  //     Alert.alert('Enter Correct Email');
  //     setLoading(false);
  //   } else if (password != mPass) {

  //     Alert.alert('Enter Correct Password');
  //     setLoading(false);
  //   } else if (email != mEmail || password != mPass) {
  //     Alert.alert('Enter Correct Email and Password');
  //     setLoading(false);
  //   }
  // };
  const isValidMobileNumber = (mobileNum) => {
    // Regular expression to validate the mobile number format
    const mobileNumberPattern = /^[0-9]{10}$/;
    return mobileNumberPattern.test(mobileNum);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor={'#2596be'} />
      {/* <Image source={require('../assets/images/a2.png')} style={styles.img} /> */}
      <Text style={styles.text}>Login</Text>
      <CustomTextInput
        placeholder={'Mobile number'}
        value={mobileNum}
        onChangeText={mobileNum => setMobile(mobileNum)}
        icon={require('../assets/images/user.png')}
        placeholderTextColor={'red'}
      />
      {badMobileNum && (
        <Text
          style={{
            color: 'red',
            marginTop: 10,
            marginLeft: 40,
            fontWeight: '800',
          }}>
          {isValidMobileNumber(mobileNum)
            ? 'Please Enter Mobile number'
            : 'Please Enter Valid Mobile number'}
        </Text>
      )}
     <View style={{ width: '100%',}}>
     <CustomTextInput
        placeholder={'Password'}
        value={password}
        onChangeText={password => setPassword(password)}
        type={'password' ?  !showPassword : showPassword}
        icon={require('../assets/images/lock.png')}
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
     </View>
      {badPassword && (
        <Text
          style={{
            color: 'red',
            marginTop: 10,
            marginLeft: 40,
            fontWeight: '800',
          }}>
          Please Enter Password
        </Text>
      )}
      <View style={{
        // alignItems:'flex-end'
        // flexDirection:'row-reverse',
        // position:'absolute',
        // right:30,
        // bottom:310
        // top:5
      }}>
        <Text style={{
          color: 'red'
        }}>forgot password ?</Text>
      </View>
      <Button
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={validate}
        disabled={loading}
      />
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
      <Text
        style={[
          styles.text,
          {
            fontSize: 18,
            marginTop: 20,
            textDecorationLine: 'underline',
          },
        ]}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        Create New Account ?
      </Text>
      

      <Text>
        {accessToken}
      </Text>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#2596be',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 60,
    borderRadius: 100,
  },
  text: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontWeight: '800',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginLeft: 40,
    fontWeight: '800',
  },
  passwordIcon: {
    position: 'absolute',
    top: 50,
    right: 40,
  },
});