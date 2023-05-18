import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({
    name = '',
    price = '',
    image = null,
}) => {
    return (
        <View><Text>card</Text>
            <View style={styles.mainContainer}>
            <Text >{name}</Text>
            <Text>{price}</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    mainContainer: {
        width: '50%',
        height: '50%',
        backgroundColor: 'grey',
        elevation: 5,
        // shadowOpacity:4

    },
})