import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const ProductCarousel = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderProductItem = (item, index) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  const handleIndexChanged = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        autoplay={false}
        showsPagination={false}
        onIndexChanged={handleIndexChanged}
      >
        {products.map((item, index) => renderProductItem(item, index))}
      </Swiper>
      <View style={styles.indicatorContainer}>
        {products.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === activeIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems:'center',
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: 'blue',
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
