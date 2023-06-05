// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// // Import your logo or branding image
// // import Logo from './Logo.png';

// const Login = () => {
//   const [mobileNum, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://192.168.1.100:3000/user/login', {
  //       mobile_num: mobileNum,
  //       password,
  //     });
  //     // Handle the response accordingly
  //     Alert.alert("login")
  //     // lo();
  //     navigation.navigate('Drawer1')
  //     console.log(response.data);
  //     // navigation.navigate('HomeScreen')
  //   } catch (error) {
  //     // Handle error
  //     console.error(error);
  //   }
  // };
  // const lo = ()=>{
  //   navigation.navigate('SignUp')
  // }

  // const handleForgotPassword = () => {
  //   // Handle forgot password logic here
  //   console.log('Forgot password');
  // };

  // const handleCreateAccount = () => {
  //   // Handle create account logic here
  //   // navigation.navigate('SignUp');
  //   console.log('Create account');
    
  // };

//   return (
//     <View style={styles.container}>
//       {/* <Image source={Logo} style={styles.logo} /> */}

//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNum}
//         onChangeText={(text) => setMobile(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />

//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>

//       <View style={styles.linksContainer}>
//         <Text style={styles.link} onPress={handleForgotPassword}>
//           Forgot Password?
//         </Text>
//         <Text style={styles.link} onPress={handleCreateAccount}>
//           Create New Account
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   logo: {
//     marginBottom: 30,
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   loginButton: {
//     width: '50%',
//     paddingVertical: 10,
//     backgroundColor: 'blue',
//     borderRadius: 25,
//     marginBottom: 10,
//   },
//   loginButtonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 20,
//   },
//   linksContainer: {
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   link: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default Login;



import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../component/CustomTextInput';
// import CommonButton from '../component/CommonButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  // const [email, setEmail] = useState('');
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const validate = () => {
    // if (email === '') {
    //   setBadEmail(true);
    // } else if (!isValidEmail(email)) {
    //   setBadEmail(true);
    // } else {
    //   setBadEmail(false);
    // }

    // if (password === '') {
    //   setBadPassword(true);
    // } else {
    //   setBadPassword(false);
    // }
    // setLoading(true);
    // getData();
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
      console.log(response.data);

    setAccessToken(accessToken);
      // navigation.navigate('HomeScreen')
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
  const lo = ()=>{
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor={'#2596be'} />
      {/* <Image source={require('../assets/images/a2.png')} style={styles.img} /> */}
      <Text style={styles.text}>Login</Text>
      <CustomTextInput
        placeholder={'Mobile number'}
        value={mobileNum}
        onChangeText={mobileNum => setMobile(mobileNum)}
        // icon={require('../assets/images/email.png')}
        placeholderTextColor={'red'}
      />
      {badEmail && (
        <Text
          style={{
            color: 'red',
            marginTop: 10,
            marginLeft: 40,
            fontWeight: '800',
          }}>
          {isValidEmail(mobileNum)
            ? 'Please Enter Email Id'
            : 'Please Enter Valid Email Id'}
        </Text>
      )}
      <CustomTextInput
        placeholder={'Password'}
        value={password}
        onChangeText={password => setPassword(password)}
        type={'password'}
        // icon={require('../assets/images/lock.png')}
        placeholderTextColor={'red'}
      />
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
          color:'red'
        }}>forgot password ?</Text>
      </View>
      <Button
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={handleLogin}
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
    alignItems:'center',
    justifyContent:'center'
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
});