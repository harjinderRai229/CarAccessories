import React, { useState } from 'react';
import { StyleSheet, Text, View, Dropdown } from 'react-native';



const App = () => {
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

export default App;
