import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../AuthContext';

const ProfileScreen = () => {
  const { user } = useContext(AuthContext);

  return (
    <View style={{backgroundColor:"#000"}}>
      <Text>Welcome, {user && user.fname}  {user.otp }</Text>
    </View>
  );
};

export default ProfileScreen;
