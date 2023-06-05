// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert, ToastAndroid } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// const SignUp = () => {
//   const [fname, setName] = useState('');
//   const [lname, setLastName] = useState('');
//   const [mobileNum, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [showOtpScreen, setShowOtpScreen] = useState(false);
//   const [otp, setOtp] = useState('');
//   const navigation =useNavigation();
//   const showToast = () => {
//     ToastAndroid.show('Sending Otp', ToastAndroid.SHORT); 
// };
//   const handleCreateUser = async () => {
//     try {
//       const response = await axios.post('http://192.168.120.134:3000/user/create', {
//         fname,
//         lname,
//         mobile_num: mobileNum,
//         password,
//       });
//       // Handle the response accordingly
//       console.log(response.data);
//       // Show the OTP screen
//       showToast();
//       setShowOtpScreen(true);
//     } catch (error) {
//       // Handle error
//       // Alert.alert('Already', 'Account');
//       console.error(error);
//     }
//   };

//   const handleVerifyOtp = () => {
//     // Perform OTP verification here
//     // You can use the otp and mobileNum values for verification
//     if (otp === '123456') {
//       Alert.alert('Success', 'OTP verified successfully');
//       // setShowOtpScreen(false);
//       navigation.navigate('Drawer1');
      
//       // Proceed to the next step after OTP verification
//     } else {
//       Alert.alert('Error', 'Invalid OTP');
//     }
//   };

//   return (
//     <View>
//       {!showOtpScreen ? (
//         <>
//           <TextInput
//             placeholder="First name"
//             value={fname}
//             onChangeText={text => setName(text)}
//           />
//           <TextInput
//             placeholder="Last Name"
//             value={lname}
//             onChangeText={text => setLastName(text)}
//           />
//           <TextInput
//             placeholder="Mobile Number"
//             value={mobileNum}
//             onChangeText={text => setMobile(text)}
//           />
//           <TextInput
//             placeholder="Password"
//             secureTextEntry
//             value={password}
//             onChangeText={text => setPassword(text)}
//           />
//           <Button title="Create User" onPress={handleCreateUser} />
//         </>
//       ) : (
//         <View>
//           <TextInput
//             placeholder="Enter OTP"
//             value={otp}
//             onChangeText={text => setOtp(text)}
//           />
//           <Button title="Verify OTP" onPress={handleVerifyOtp} />
//         </View>
//       )}
//     </View>
//   );
// };

// export default SignUp;




//  change here save data in local storage 
// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';
// import MMKVStorage from 'react-native-mmkv-storage';

// const SignUp = () => {
//   const [fname, setName] = useState('');
//   const [lname, setLastName] = useState('');
//   const [mobileNum, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [showOtpScreen, setShowOtpScreen] = useState(false);
//   const [otp, setOtp] = useState('');

//   const handleCreateUser = () => {
//     // Store the user data in MMKV
//     const MMKV = new MMKVStorage.Loader().initialize();
//     MMKV.setString('fname', fname);
//     MMKV.setString('lname', lname);
//     MMKV.setString('mobileNum', mobileNum);
//     MMKV.setString('password', password);

//     // Show the OTP screen
//     setShowOtpScreen(true);
//   };

//   const handleVerifyOtp = () => {
//     // Perform OTP verification here
//     // You can use the otp and mobileNum values for verification
//     if (otp === '123456') {
//       Alert.alert('Success', 'OTP verified successfully');

//       // Get the user data from MMKV
//       const MMKV = new MMKVStorage.Loader().initialize();
//       const storedFname = MMKV.getString('fname');
//       const storedLname = MMKV.getString('lname');
//       const storedMobileNum = MMKV.getString('mobileNum');
//       const storedPassword = MMKV.getString('password');

//       // Proceed to the next step after OTP verification
//       console.log('User Data:', {
//         fname: storedFname,
//         lname: storedLname,
//         mobileNum: storedMobileNum,
//         password: storedPassword,
//       });
//     } else {
//       Alert.alert('Error', 'Invalid OTP');
//     }
//   };

//   return (
//     <View>
//       {!showOtpScreen ? (
//         <>
//           <TextInput
//             placeholder="First name"
//             value={fname}
//             onChangeText={text => setName(text)}
//           />
//           <TextInput
//             placeholder="Last Name"
//             value={lname}
//             onChangeText={text => setLastName(text)}
//           />
//           <TextInput
//             placeholder="Mobile Number"
//             value={mobileNum}
//             onChangeText={text => setMobile(text)}
//           />
//           <TextInput
//             placeholder="Password"
//             secureTextEntry
//             value={password}
//             onChangeText={text => setPassword(text)}
//           />
//           <Button title="Create User" onPress={handleCreateUser} />
//         </>
//       ) : (
//         <View>
//           <TextInput
//             placeholder="Enter OTP"
//             value={otp}
//             onChangeText={text => setOtp(text)}
//           />
//           <Button title="Verify OTP" onPress={handleVerifyOtp} />
//         </View>
//       )}
//     </View>
//   );
// };

// export default SignUp;




import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../component/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import Button from '../component/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ImagePicker from 'react-native-image-crop-picker';
// import 'react-native-get-random-values';

// import { v4 as uuidv4 } from 'uuid';
const SignUp = () => {
  // const navigation = useNavigation();
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  // const [number, setNumber] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [image, setImage] = useState(null);
  // const handleSignUp = () => {
  //   // const navigation=useNavigation();
  //   if (name === '' || email === '' || number === '' || password === '') {
  //     setError('All fields are required.');
  //   } 
  //   else if (number.length !== 10) {
  //     setError('Invalid phone number.');
  //   } else if (password.length < 8) {
  //     setError('Password must be at least 8 characters long.');
  //   } 
  //   // else if (email === email) {
  //   //   setError('Email address must be different.');
  //   // }
  //   // else if (
  //   //   number === number
  //   // ) {
  //   //   setError('Phone number must be different.');
  //   // }

  //   else {
  //     saveData();
  //   }
  // };
  // const [fname, setName] = useState('');
  // const [lname, setLastName] = useState('');
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otp, setOtp] = useState('');
  const navigation =useNavigation();
  const showToast = () => {
    ToastAndroid.show('Sending Otp', ToastAndroid.SHORT); 
};
  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://192.168.120.134:3000/user/create', {
        fname: name,
        lname,
        mobile_num: mobileNum,
        password,
      });
      // Handle the response accordingly
      console.log(response.data);
      // Show the OTP screen
      showToast();
      setShowOtpScreen(true);
    } catch (error) {
      // Handle error
      // Alert.alert('Already', 'Account');
      console.error(error);
    }
  };

  const handleVerifyOtp = () => {
    // Perform OTP verification here
    // You can use the otp and mobileNum values for verification
    if (otp === '123456') {
      Alert.alert('Success', 'OTP verified successfully');
      // setShowOtpScreen(false);
      navigation.navigate('Drawer1');
      
      // Proceed to the next step after OTP verification
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };
  //save data using async Storage
  const saveData = async () => {
    // const token = uuidv4();
    // await AsyncStorage.setItem('NAME', name);
    // await AsyncStorage.setItem('EMAIL', email);
    // await AsyncStorage.setItem('NUMBER', number);
    // await AsyncStorage.setItem('PASSWORD', password);
    // await AsyncStorage.setItem('TOKEN', token);
    // navigation.goBack();
    // console.log('name::::::::::::::::::::::', name , email);
    // console.log('token::::::::::::::::::::::', token);
  };

  const validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
     <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text style={styles.text}>Create New Account</Text>
       <CustomTextInput
        placeholder={'Enter Your Name'}
        // icon={require('../assets/images/user.png')}
        value={name}
        onChangeText={setName}
      />
      <CustomTextInput
        placeholder={'Enter Your Email'}
        // icon={require('../assets/images/email.png')}
        value={email}
        onChangeText={setLname}
      />
      <CustomTextInput
        placeholder={'Enter Your Number'}
        // icon={require('../assets/images/phone.png')}
        keyboardType={'numeric'}
        value={number}
        onChangeText={setNumber}
      />
      <CustomTextInput
        placeholder={'Password'}
        type={'password'}
        // icon={require('../assets/images/lock.png')}
        value={password}
        onChangeText={setPassword}
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <Button
        title={'Sign Up'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={handle}
      />
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
          navigation.goBack();
        }}>
        Already Have an account / Sign In
      </Text>
     </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:30
    // backgroundColor: '#2596be',
  },
  img: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 100,
  },
  text: {
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
    marginBottom: 10,
  },
  imgPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 50,
  },
});