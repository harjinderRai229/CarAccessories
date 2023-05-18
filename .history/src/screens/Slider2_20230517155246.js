import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';
const Slider2 = () => {
    return (
        <View>
            <SliderBox
                style={styles.Slider}
                images={data.imageUrl}
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