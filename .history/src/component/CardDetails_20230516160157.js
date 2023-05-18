import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CardDetailsScreen = ({ route , item}) => {
  const { imageUrl , title } = route.params;

  return (
    <View style={styles.container}>
      {/* <Image style={styles.cardImage} source={{ uri: item.imageUrl }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text> */}
      <Text style={styles.price}>Price: {item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
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
