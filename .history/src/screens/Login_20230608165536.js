import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import CustomTextInput from '../component/CustomTextInput';
// import CommonButton from '../component/CommonButton';
import { useNavigation } from '@react-navigation/native';
import Button from '../component/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../AuthContext';
const Login = () => {
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [badMobileNum, setBadMobileNum] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const validate = () => {
    if (mobileNum === '') {
      setLoading(false);
      setBadMobileNum(true);
    } else if (!isValidMobileNumber(mobileNum)) {
      setBadMobileNum(true);
      setLoading(false);
    } else {
      setLoading(true);
      setBadMobileNum(false);
    }

    if (password === '') {
      setBadPassword(true);
      setLoading(false);
    } else if (password.length < 8 || !isStrongPassword(password)) {
      setBadPassword(true);
      setLoading(false);
    } else {
      setLoading(true);
      setBadPassword(false);
    }

    // setLoading(true);
    handleLogin();
  };

  const isStrongPassword = (password) => {
    // Regular expressions to validate password strength
    const uppercasePattern = /[A-Z]/;
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
      if (mobileNum === '' || password === '') {
        Alert.alert('Error', 'Please fill all fields.');
        return;
      }

      const response = await login(mobileNum, password);

      if (response.status === 1) {
        // Login successful
        // Do something after successful login
        navigation.replace('Drawer1')
        console.log('Login successful', response);
        setLoading(true);
      } else {
        // Login failed
        Alert.alert('Error', response.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to log in. Please try again.');
      console.log(error);
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
      }, 4000); // Hide after 5 seconds (5000 milliseconds)
    }
    return () => {
      clearTimeout(hideErrorTimeout);
      setLoading(false);
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
    <ScrollView style={styles.container}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar backgroundColor={'#2596be'} />
      <Image source={require('../assets/images/11.jpg')} style={styles.img} />
      <View style={styles.header}>
      <Text style={styles.text}>Login</Text>
      </View>
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
            marginTop: 4,
            marginLeft: 32,
            fontSize:12
            // fontWeight: '800',
          }}>
          {isValidMobileNumber(mobileNum)
            ? 'Please enter mobile number'
            : 'Please enter valid mobile number'}
        </Text>
      )}
      <View style={{ width: '100%', }}>
        <CustomTextInput
          placeholder={'Password'}
          value={password}
          onChangeText={password => setPassword(password)}
          type={'password' ? !showPassword : showPassword}
          iconName={'mobile'}
          size={}
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
        marginRight:26,
        // marginTop:3
        // borderWidth:1,
        // backgroundColor:'blue'
       }}>
       <Text style={{
          color: 'blue',
          textAlign: 'right',
          marginTop:3
        }}>forgot password ?</Text>
       </View>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 100,
  },
  header: {
    width: '100%',
    // backgroundColor: '#fd7e14',
    alignItems: 'center',
    paddingVertical: 20,
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
  passwordContainer: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  forgotPasswordLink: {
    position: 'absolute',
    bottom: -20,
    right: 0,
    marginVertical: 10,
  },
});