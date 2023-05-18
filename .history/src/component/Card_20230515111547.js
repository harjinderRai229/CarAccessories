import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({
    name = '',
    pr = '',}) => {
  return (
    <View><Text>card</Text>
     <View style={styles.mainContainer}>
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
        elevation:5,
        // shadowOpacity:4

    },
})