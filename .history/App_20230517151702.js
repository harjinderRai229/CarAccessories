import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const ProductCarousel = ({ products }) => {
  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  return (
    <Carousel
      data={products}
      renderItem={renderProductItem}
      sliderWidth={300}
      itemWidth={100}
      loop
      autoplay
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

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

const App = () => {
  return <ProductCarousel products={data.imageUrl} />;
};

export default App;
