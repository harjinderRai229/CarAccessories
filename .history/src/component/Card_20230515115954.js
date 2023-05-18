import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ item }) => {
    return (
        <View  style={{
            borderTopWidth: 1,
           borderTopColor: '#EDEDED',
           shadowColor: 'black',
           flexDirection: 'row'}}>
            <View style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 8,
        elevation: 4,
        margin:10
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
    },
});

export default Card;
