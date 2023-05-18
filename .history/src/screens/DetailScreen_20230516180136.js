import React, { useState } from 'react';
import { StyleSheet, Text, View, Dropdown } from 'react-native';

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  quantityInput: {
    width: '20%',
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  dropdown: {
    width: '80%',
    height: 40,
    borderRadius: 5,
  },
});

const CardDE = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.quantityContainer}>
        <Text>Quantity:</Text>
        <Dropdown
          style={styles.dropdown}
          items={[1, 2, 3, 4, 5]}
          value={quantity}
          onChange={(value) => setQuantity(value)}
        />
      </View>
    </View>
  );
};

export default CardDE;
