import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Share } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const Slider2 = () => {
  const handleShare = async () => {
    try {
      const shareOptions = {
        message: 'Check out this image!',
        url: data.imageUrl[0], // Provide the URL of the image you want to share
      };

      const result = await Share.share(shareOptions);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Share completed
          console.log('Shared successfully');
        } else {
          // Share dismissed
          console.log('Share dismissed');
        }
      } else if (result.action === Share.dismissedAction) {
        // Share cancelled
        console.log('Share cancelled');
      }
    } catch (error) {
      console.error('Error sharing image:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
      {/* Rest of the code remains the same */}
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
      borderRadius: 150,
      zIndex: 1,
    },
    shareButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  export default Slider2;