import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image, Alert, ToastAndroid } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { logout } from '../../redux/action/Action'; // Replace with your actual logout action
import { AuthContext } from '../../AuthContext';
import { StackActions } from '@react-navigation/native';

const DrawerContent = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const showToast = () => {
    ToastAndroid.show('Logout', ToastAndroid.SHORT);
  };
  const handleLogout = () => {
    // Call the logout action
   
    Alert.alert(
      'Confirmation',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            // Handle cancel action
          }
        },
        {
          text: 'OK',
          onPress: () => { 
            logout();
            
            navigation.dispatch(popAction);
            showToast();
          }
        }
      ]
    );
    // Perform any additional logic, such as navigating to the login screen
    // ...
  };
  const handleProfile = () => {
    // Call the logout action
    // logout();
    navigation.replace('test')
    // Perform any additional logic, such as navigating to the login screen
    // ...
  };
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
        {/* <TouchableOpacity style={styles.item} onPress={() => navigation.replace('Login')}>
          <Text style={styles.itemText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.itemText}>SignUp</Text>
        </TouchableOpacity> */}
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
