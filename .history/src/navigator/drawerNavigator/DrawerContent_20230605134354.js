import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../redux/action/Action';
import React, { useEffect, useState } from 'react';
import CustomTextInput from '../component/CustomTextInput';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [badMobileNum, setBadMobileNum] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
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
    handleLogin();
  };

  const isStrongPassword = (password) => {
    // Regular expressions to validate password strength
    const specialCharPattern = /[@$!%*?&]/;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;

    return (
      password.length >= 8 &&
      // specialCharPattern.test(password) &&
      uppercasePattern.test(password) &&
      // lowercasePattern.test(password) &&
      numberPattern.test(password)
    );
  };

  const handleLogin = async () => {
    try {
      const response = await api.post('/user/login', {
        mobile_num: mobileNum,
        password,
      });

      const { accessToken, id, fname, lname, mobile_num } = response.data.data;

      const userObject = {
        accessToken,
        id,
        fname,
        lname,
        mobile_num,
      };

      const dataToken = await AsyncStorage.setItem('user', JSON.stringify(userObject));

      console.log(userObject.accessToken);

      dispatch(setAccessToken(userObject));

      navigation.replace('Drawer1');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    let hideErrorTimeout = null;
    if (badPassword || badMobileNum) {
      hideErrorTimeout = setTimeout(() => {
        setBadPassword(false);
        setBadMobileNum(false);
      }, 4000);
    }
    return () => {
      clearTimeout(hideErrorTimeout);
    };
  }, [badPassword]);

  const isValidMobileNumber = (mobileNum) => {
    // Regular expression to validate the mobile number format
    const mobileNumberPattern = /^[0-9]{10}$/;
    return mobileNumberPattern.test(mobileNum);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor={'#2596be'} />
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
        <Text style={styles.errorText}>
          {isValidMobileNumber(mobileNum)
            ? 'Please enter a mobile number'
            : 'Please enter a valid mobile number'}
        </Text>
      )}
      <View style={{ width: '100%' }}>
        <CustomTextInput
          placeholder={'Password'}
          value={password}
          onChangeText={password => setPassword(password)}
          type={showPassword ? 'password' : 'text'}
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
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ color: 'red' }}>forgot password ?</Text>
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
      <Text>{/* {accessToken} */}</Text>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
