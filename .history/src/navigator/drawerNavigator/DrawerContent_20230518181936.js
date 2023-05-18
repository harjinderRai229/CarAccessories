import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native';

const DrawerContent = ({ navigation }) => {

  return (
    <View style={styles.container}>
    <View style={{
     alignItems:'center',
     justifyContent:'center',
     backgroundColor: '#f9c23f',
    //  position:'absolute',
     width:"100%",
     height:80,
    }} >
    <Image source={require('../../assets/images/11.jpg')} style={{width:"100%",height:"100%"}}/>
    </View>
    <View style={{
      paddingLeft:10
    }}>
       <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.itemText}>Login</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Sign')}>
        <Text style={styles.itemText}>Developers</Text>
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

export default DrawerContent;
