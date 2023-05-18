import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const API_URl = 'http://192.168.1.100:3000/accessories/productList';
const CardDetails = () => {
    const [data, setData] = React.useState([]);
    
  return (
    <View>
      <Text>CardDetails</Text>
    </View>
  )
}

export default CardDetails

const styles = StyleSheet.create({})