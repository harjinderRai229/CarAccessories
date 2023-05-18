import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MyScrollView = () => {
    const [selectedQuantity, setSelectedQuantity] = useState('1');

    return (
        <ScrollView>
            <View style={styles.quantityContainer}>
                <Text>Quantity:</Text>
                <View style={styles.quantityInput}>
                    <Text style={styles.selectedValueText}>{selectedQuantity}</Text>
                    <Picker
                        selectedValue={selectedQuantity}
                        onValueChange={(itemValue) => setSelectedQuantity(itemValue)}
                        style={styles.dropdown}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        {/* Add more items here */}
                    </Picker>
                </View>
            </View>
        </ScrollView>
    );
};

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
        width: '100%',
        height: 40,
        borderRadius: 5,
    },
    selectedValueText: {
        position: 'absolute',
        right: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MyScrollView;
