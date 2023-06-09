import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Test = () => {
  const accessToken = useSelector(state => state.auth.accessToken);
console
  return (
    <View>
      <Text>Access Token: {accessToken}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
