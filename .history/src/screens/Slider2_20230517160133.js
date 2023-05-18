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
    </View>
  );
};

const data = {
  // Data object remains the same
};

const styles = StyleSheet.create({
  // Styles remain the same
});

export default Slider2;
