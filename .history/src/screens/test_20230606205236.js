import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Test = () => {
  const { user } = useContext(AuthContext);
  // const userObject = useSelector(state => state.auth.accessToken);
// console.log(accessToken);
  return (
    <View style={{backgroundColor:"#000"}}>
      <Text>Access Token: {user.accessToken}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
