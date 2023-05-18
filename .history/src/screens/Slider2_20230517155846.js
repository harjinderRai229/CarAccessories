import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const Slider2 = () => {
  return (
    <View style={styles.container}>
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

      <Text style={styles.priceText}>{data.prodName}</Text>

      <Text style={styles.priceText}>{data.p}</Text>
        <Text style={styles.priceText}>{data.price}</Text>
      </View>
    </View>
  );
};

const data = {
  "countryOfOrigin": "India",
  "description": "Go Trendy and personalize your car in style with MSGA Body Styling Kits",
  "imageUrl": [
    "https://m.media-amazon.com/images/I/51ecJbLIRqL._SX355_.jpg",
    "https://www.marutisuzuki.com/-/media/marutigeniuneaccessories_27112019/partsimages/2022/04/18/990j0m72r07-210_3.jpg",
    "https://www.marutisuzuki.com/-/media/marutigeniuneaccessories_27112019/partsimages/2022/09/17/990j0m76t07-070_0.jpg",
    "https://www.marutisuzuki.com/-/media/marutigeniuneaccessories_27112019/partsimages/2022/04/18/990j0m72r07-350_1.jpg"
  ],
  "outOfStock": false,
  "price": "₹1190",
  "prodName": "Rear Upper Spoiler Extender - Black + Red | Fronx",
  "productDetails": "Dual Tone Rear Bumper Extender manufactured in Gleaming Silver and Gallant Red from Maruti Suzuki Genuine Accessories which can turn the exterior of your new Brezza sporty. Crafted from highly robust plastic, tailor-made for your car",
  "productId": "64632b4d93f21189aca09512"
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
});

export default Slider2;
