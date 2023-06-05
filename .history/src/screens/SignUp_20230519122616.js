import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ToastAndroid } from 'react-native';
import axios from 'axios';

const SignUp = () => {
  const [fname, setName] = useState('');
  const [lname, setLastName] = useState('');
  const [mobileNum, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otp, setOtp] = useState('');
  const showToast = () => {
    ToastAndroid.show('Sending Otp', ToastAndroid.SHORT); 
};
  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://192.168.1.100:3000/user/create', {
        fname,
        lname,
        mobile_num: mobileNum,
        password,
      });
      // Handle the response accordingly
      console.log(response.data);
      // Show the OTP screen
      showToast()
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
      // Proceed to the next step after OTP verification
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View>
      {!showOtpScreen ? (
        <>
          <TextInput
            placeholder="First name"
            value={fname}
            onChangeText={text => setName(text)}
          />
          <TextInput
            placeholder="Last Name"
            value={lname}
            onChangeText={text => setLastName(text)}
          />
          <TextInput
            placeholder="Mobile Number"
            value={mobileNum}
            onChangeText={text => setMobile(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button title="Create User" onPress={handleCreateUser} />
        </>
      ) : (
        <View>
          <TextInput
            placeholder="Enter OTP"
            value={otp}
            onChangeText={text => setOtp(text)}
          />
          <Button title="Verify OTP" onPress={handleVerifyOtp} />
        </View>
      )}
    </View>
  );
};

export default SignUp;




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



