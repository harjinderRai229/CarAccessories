import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const Slider2 = () => {
  const handleShare = () => {
    // Handle share functionality here
    alert('Share button clicked!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
      <SliderBox
        style={styles.slider}
        images={data.imageUrl}
        dotColor="blue"
        inactiveDotColor="silver"
        autoplay={true}
        circleLoop={true}
        autoplayInterval={3000}
        dotStyle={styles.dotStyle}
        imageLoadingColor="white"
        onCurrentImagePressed={(index) => alert(index + 1)}
        paginationBoxVerticalPadding={10}
      />
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{data.price}</Text>
      </View>
    </View>
  );
};

const data = {
  // Data object remains the same
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '50%',
  },
  slider: {
    marginTop: 10,
    resizeMode: 'contain',
    height: 200,
    width: '90%',
  },
  dotStyle: {
    height: 10,
    width: 15,
    borderRadius: 20,
  },
  priceContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  shareButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
    zIndex: 1,
  },
  shareButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Slider2;
