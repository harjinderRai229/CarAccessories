import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Button = ({ title, style, textStyle, onPress, bgColor ,textColor}) => {
    return (
        // <View>
        //     <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        //         <Text style={[styles.text, textStyle]}>{title}</Text>
        //     </TouchableOpacity>
        // </View>
            <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: bgColor }]}
            onPress={onPress}>
            <Text style={{ color: textColor }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "85%",
        height: 50,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 50,
    },
    // text: {
    //     fontSize: 10,
    //     fontWeight: '900',
    //     color: 'white',
    //     paddingTop: 2,
    //     textAlign: 'center',
    // },
});