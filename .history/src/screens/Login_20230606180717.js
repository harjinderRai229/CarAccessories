import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch} from 'react-redux';
import { setAccessToken, setSession } from '../redux/action/Action';
import React, { u,useEffect, useState } from 'react';
import CustomTextInput from '../component/CustomTextInput';
// import CommonButton from '../component/CommonButton';
import { useNavigation } from '@react-navigation/native';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../utils/api';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [badMobileNum, setBadMobileNum] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = async () => {
    if (mobileNum === '') {
      setBadMobileNum(true);
    } else if (!isValidMobileNumber(mobileNum)) {
      setBadMobileNum(true);
    } else {
      setBadMobileNum(false);
    }

    if (password === '') {
      setBadPassword(true);
    } else if (password.length < 8 || !isStrongPassword(password)) {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }

    setLoading(true);
    await handleLogin();
  };

  const isStrongPassword = (password) => {
    // Regular expressions to validate password strength
    const specialCharPattern = /[@$!%*?&]/;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;

    return (
      password.length >= 8 &&
      specialCharPattern.test(password) &&
      uppercasePattern.test(password) &&
      lowercasePattern.test(password) &&
      numberPattern.test(password)
    );
  };

  const handleLogin = async () => {
    try {
      const response = await login(mobileNum, password);
      console.log(response); // Response from the API

      const { accessToken, id, fname, lname, mobile_num } = response.data.data;

      const userObject = {
        accessToken,
        id,
        fname,
        lname,
        mobile_num,
      };

      await AsyncStorage.setItem('user', JSON.stringify(userObject));
      console.log(response.data);
      // Handle success and navigation
    } catch (error) {
      console.error(error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        maxLength={10}
        keyboardType={'number-pad'}
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
  {/* //   {badPassword && (
  <View style={styles.errorContainer1}>
    <Text style={styles.errorText1}>
      Password must be at least 8 characters long and contain:
    </Text>
    {/* <Text style={styles.errorText1}>
      - at least one special character
    </Text> */}
    {/* <Text style={styles.errorText1}>
      - one uppercase letter
    </Text> */}
    {/* <Text style={styles.errorText1}>
      - one lowercase letter
    </Text> */}
    {/* <Text style={styles.errorText1}>
      - one numeric digit
    </Text> */}
 {/* / </View> */}
{/* )} */}
{/* // */} 

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
        {/* {accessToken} */}
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
  errorContainer1: {
    marginTop: 10,
    marginLeft: 40,
  },
  errorText1: {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 12,
  },
});