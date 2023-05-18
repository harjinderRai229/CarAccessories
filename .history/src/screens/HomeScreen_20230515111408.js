import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Children, useState } from 'react'
import { product } from '../utils/products'
import Card from '../component/Card'

const HomeScreen = () => {
    const [data, setData] = useState([product])
  return (
    <View>
        <FlatList
        data={data}
        renderItem={()=>{
            return (
                <Card pr/>
            )
        }}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})