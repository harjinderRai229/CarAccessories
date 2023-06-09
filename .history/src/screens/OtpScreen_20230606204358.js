import React, { useContext } from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = () => {
import { AuthContext } from '../AuthContext';
  const { user } = useContext(AuthContext);
 <Text>Welcome, {user && user.fname}  {user.otp }</Text>
  return (
    <View style={{backgroundColor:"#000"}}>
     
    </View>
  );
};

export default ProfileScreen;
