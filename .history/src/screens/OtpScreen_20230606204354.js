import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../AuthContext';

const ProfileScreen = () => {
  const { user } = useContext(AuthContext);
 <Text>Welcome, {user && user.fname}  {user.otp }</Text>
  return (
    <View style={{backgroundColor:"#000"}}>
     
    </View>
  );
};

export default ProfileScreen;
