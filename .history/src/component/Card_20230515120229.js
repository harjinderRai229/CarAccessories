import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ item }) => {
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
                <Image source={{
                    // uri : Image
                }}/>
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
