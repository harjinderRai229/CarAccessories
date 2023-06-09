import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../AuthContext';

const Test = () => {
  const { user } = useContext(AuthContext);
  // console.log(accessToken);
  return (
    <View style={{backgroundColor:"#000"}}>
      <Text style={{color:'#fff'}}>Name {user.fname} {}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
