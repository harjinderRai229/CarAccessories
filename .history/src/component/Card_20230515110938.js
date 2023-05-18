import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View><Text>hello</Text>
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
        // backgroundColor: 'red',
        elevation:3
    },
})