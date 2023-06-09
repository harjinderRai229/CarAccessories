import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { logout } from '../../redux/action/Action'; // Replace with your actual logout action
import { CLEAR_ACCESS_TOKEN } from '../../redux/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerContent = ({ navigation }) => {

  const dispatch = useDispatch();
  // const handleLogout = () => {
  //   // Call the logout action
  //   dispatch({type : logout()});

  //   dispatch({ type: CLEAR_ACCESS_TOKEN });
  //   navigation.navigate('Login')
  //   // Perform any additional logic, such as navigating to the login screen
  //   // ...
  // };
  const handleLogout = async () => {
    try {
      // Clear user data from AsyncStorage
      await AsyncStorage.removeItem('user');
      // Dispatch the clearSession action
      dispatch(clearSession());
      // Navigate to the login screen
      navigation.replace('Login'); // Replace with your login screen
    } catch (error) {
      console.error(error);
    }
  };
  const handleProfile = () => {
    // Call the logout action
    // logout();
    navigation.navigate('test')
    // Perform any additional logic, such as navigating to the login screen
    // ...
  };
  useEffect(() => {
    handleLogout();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9c23f',
        //  position:'absolute',
        width: "100%",
        height: 80,
      }} >
        <Image source={require('../../assets/images/11.jpg')} style={{ width: "100%", height: "100%" }} />
      </View>
      <View style={{
        paddingLeft: 10
      }}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.itemText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.itemText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleLogout}>
          <Text style={styles.itemText}>logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleProfile}>
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    // paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default connect(null, { logout })(DrawerContent);
