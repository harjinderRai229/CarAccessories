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
        style={{flex: 1}}
        renderItem={({item, index}) => {
          return (
            <Card
              key={index}
              name={item.name}
              onPress={() => navigation.navigate('Details', {item: item})}
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