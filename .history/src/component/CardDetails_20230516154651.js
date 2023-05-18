import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{item.prod}</Text> */}
      {/* <Text style={styles.description}>{item.description}</Text> */}
      <Text style={styles.price}>Price: {item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4ff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardDetailsScreen;
