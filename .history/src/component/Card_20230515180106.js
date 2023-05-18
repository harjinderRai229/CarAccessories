import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';

// import { produc} from './products';
import {pr}

const ProductCard = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={item.image} />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
    </View>
  );
};

const App = () => {
  const showToast = () => {
    ToastAndroid.show('Added to favorites!', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={showToast}
      >
        <Text style={styles.favoriteButtonIcon}>♡</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  cardName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardPrice: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  favoriteButton: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 0,
    right: 10,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: .1,
  },
  favoriteButtonIcon: {
    fontSize: 40,
  },
});

export default App;
