import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
// import ProductCard from './ProductCard';
import Card from '../component/Card';
import { product } from '../utils/products';

const API_URL = 'http://192.168.1.100:3000/accessories/productList';

const CardDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson.data);
        setLoading(false);
        setError(false);
        console.log('::::::::::::::::::DATA::::::::::::::::::::', responseJson.data)
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        setRefreshing(false);
      });
  }, []);

const HomeScreen = ({item}) => {
    return (
        <View style={{
            flex: 1,
            padding: 10,
            backgroundColor: '#fff',
        }}>

            <FlatList
                data={product}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={item => item.id.toString()}
                //   horizontal
                columnWrapperStyle={StyleSheet.columnWrapper}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    columnWrapper: {
        justifyContent: 'space-between',
    },
})
export default HomeScreen;
