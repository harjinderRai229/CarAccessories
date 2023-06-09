import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../AuthContext';

const ProfileScreen = () => {
  const { user } = useContext(AuthContext);

  return (
    <View>
      <Text>Welcome, {user && user.fname}</Text>
    </View>
  );
};

export default ProfileScreen;
