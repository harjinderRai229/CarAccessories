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
import React, { useEffect, useState } from 'react';
import CustomTextInput from '../component/CustomTextInput';
// import CommonButton from '../component/CommonButton';
import { useNavigation } from '@react-navigation/native';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../utils/api';
const Login = ({ login }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
          console.log('Login successful',response);
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
      
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
      color:'#000'
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

  useEffect(() => {
    let hideErrorTimeout = null;
    if (badPassword || badMobileNum) {
      hideErrorTimeout = setTimeout(() => {
        setBadPassword(false);
        setBadMobileNum(false);
      }, 4000); // Hide after 5 seconds (5000 milliseconds)
    }
    return () => {
      clearTimeout(hideErrorTimeout);
    };
  }, [badPassword]);
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