import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Test = () => {
  const accessToken = useSelector(state => state.auth.accessToken);
// console.log(accessToken);
  return (
    <View>
      <Text>Access Token: {useraccessToken}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
