import { Dimensions , StyleSheet, View ,Image, Text, TouchableOpacity} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Card = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.btnText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        width: wp('47%'),
        height: hp('25%'),
        backgroundColor: '#fff',
        borderRadius: 7,
        padding: wp('2%'),
        elevation: 4,
        margin: wp('.8%')
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('1%'),
        alignItems:'center'
    },
    name: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        marginTop: hp('1.5%'),
        color: "#000",
    },
    price: {
        fontSize: hp('1.5%'),
        color: '#666',
    },
    img: {
        height: hp('12%'),
        width: wp('25%'),
        alignSelf: 'center'
    },
    btn1: {
        backgroundColor: '#6610f2',
        width: wp('15%'),
        padding: wp('1%'),
        borderRadius: wp('3%'),
    },
    btnText: {
        color: '#fff',
        paddingHorizontal: wp('1%'),
        fontSize: hp('1.5%'),
        padding: wp('1%'),
        textAlign:'center'
    },
    btn2: {
        backgroundColor: '#6610f2',
        width: wp('25%'),
        height: hp('4%'),
        borderRadius: wp('3%'),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Card;
