import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DetailScreen = ({ route }) => {
    const { product } = route.params;
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{
                // width: '100%',
                height: '45%',
                backgroundColor:'green',
                justifyContent:'center'
                alignItems: 'center',
                // padding: 5,

            }}>
                <Image
                    style={styles.image}
                    source={{ uri: product.imageUrl }}
                    resizeMode='contain'

                />
            </View>
            <View style={{
                paddingLeft: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    color: 'black',
                    marginBottom: 10
                }}>{product.prodName}</Text>
                {/* <Text>itemId: {JSON.stringify(itemId)}</Text> */}
                <Text style={{
                    fontSize: 17,
                    color: 'grey',
                    marginBottom: 20
                }}>{product.description}</Text>
                <Text style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '700'
                }}>{product.price}</Text>
                <Text style={{
                    fontSize: 12,
                    color: 'grey',
                    fontWeight: '400',
                    marginTop: 5
                }}>Inclusive all the Taxes</Text>
                <View style={{
                    width: '20%',
                    height: '13%',
                    borderWidth: 1,
                    // alignItems:''
                    justifyContent: 'center',
                    padding: 5,
                    marginTop: 10,
                    borderRadius: 5
                }}>
                    <Text>1</Text>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.btn1} >
                        <Text style={styles.btnText}>Add To Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2}>
                        <Text style={styles.btnText}>Add to WishList</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    innerContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        marginTop: 10,
        width: "100%",
        justifyContent: 'space-evenly',
        // paddingHorizontal:10,
        paddingRight: 10
    },
    btn1: {
        backgroundColor: '#6610f2',
        width: "30%",
        // padding: 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20

        // marginTop:5

    },
    btnText: {
        color: '#fff',
        paddingHorizontal: 5,
        fontSize: 12,
    },
    btn2: {
        backgroundColor: '#6610f2',
        width: "30%",
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // padding:2
        marginLeft: 30
    },
    image: {
        width: '100%',
        height: "90%",
        // borderRadius:40
    }
})