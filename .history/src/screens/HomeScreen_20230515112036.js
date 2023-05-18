import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Children, useState } from 'react'
import { product } from '../utils/products'
import Card from '../component/Card'

const HomeScreen = () => {
    const [data, setData] = useState([product])
  return (
    <View style={{backgroundColor:'red', flex:1}}>
        <FlatList
        data={data}
        style={{flex: 1}}
        renderItem={({item, index}) => {
          return (
            <Card
              key={index}
              name={item.name}
            />
          );
        }}
        keyExtractor={item => item}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})