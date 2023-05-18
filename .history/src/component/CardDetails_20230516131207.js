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
.then((response) => response.json())
.then((responseJson) => {
    setData(responseJson);
    setLoading(false);
    setError(false);
    })
    .catch((error) => {
        setError(true);
        setLoading(false);
        setRefreshing(false);
        });

    }, [])

    return (
        <View>
        <Text>Card Details</Text>
        <Text>{JSON.stringify(data)}</Text>
            <Text>CardDetails</Text>

        </View>
    )
}

export default CardDetails

const styles = StyleSheet.create({})