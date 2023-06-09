import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../AuthContext';

const Test = () => {
  const { user } = useContext(AuthContext);
  // console.log(accessToken);
  return (
    <View style={{backgroundColor:"#000"}}>
      <Text style={{color:'#fff'}}>Name :   {user.fname} {user.lname}</Text>
      <Text style={{color:'#fff'}}>Mobile Number:   {user.mobile_num} {user.lname}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
