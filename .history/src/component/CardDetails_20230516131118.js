import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const API_URl = 'http://192.168.1.100:3000/accessories/productList';
const CardDetails = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    useEffect(() => {
fetch(API_URl)


    }, [])

    return (
        <View>
            <Text>CardDetails</Text>
        </View>
    )
}

export default CardDetails

const styles = StyleSheet.create({})