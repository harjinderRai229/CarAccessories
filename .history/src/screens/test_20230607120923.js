import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { AuthContext } from '../AuthContext';

const Test = () => {
  const { user } = useContext(AuthContext);
  // console.log(accessToken);
  return (
    <View style={{backgroundColor:"#000"}}>
      <Text style={{color:'#fff'}}>Access Token: {user.accessToken}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
