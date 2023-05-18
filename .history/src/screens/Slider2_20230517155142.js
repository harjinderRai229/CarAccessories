import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box';
const Slider2 = () => {
  return (
    <View>
       <SliderBox
        style={styles.Slider}
        images={images}
        dotColor="white"
        inactiveDotColor="silver"
        autoplay={true}
        circleLoop={true}
        autoplayInterval={3000}
        dotStyle={{
          height: 10,
          width: 20,
          // marginTop: 45,
          borderRadius: 20,
        }}
        imageLoadingColor="white"
        onCurrentImagePressed={index => alert(index + 1)}
        paginationBoxVerticalPadding={10}
      />
    </View>
  )
}

export default Slider2

const styles = StyleSheet.create({
    Slider: {
        marginTop: 10,
        resizeMode: 'contain',
        height: 150,
        width: '100%',
        paddingVertical: 40,
      },
})