/**
 * 轮播图
 */

import React, {useEffect, useState} from 'react';
import {Text, Button, Platform, Dimensions} from 'react-native';
import {View} from 'react-native-animatable';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {ScaledSheet} from 'react-native-size-matters';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const _renderItem: () => React = ({item, index}, parallaxProps) => {
  return (
    <View style={styles.item}>
      <ParallaxImage
        source={{uri: item.illustration}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  );
};

const _renderItem2: () => React = ({item, index}, parallaxProps) => {
  return (
    <View
      style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}>
      <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.subtitle}</Text>
    </View>
  );
};

const {width: screenWidth} = Dimensions.get('window');
const CarouselScreen: () => React = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);
  return (
    <>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={_renderItem}
        hasParallaxImages={true}
      />
      <Text>轮播图</Text>
      <Carousel
        layout={'default'}
        data={entries}
        sliderWidth={300}
        itemWidth={300}
        renderItem={_renderItem2}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </>
  );
};

const styles = ScaledSheet.create({
  content_style: {
    flex: 1,
    marginHorizontal: '5@s',
  },
  button_style: {
    width: '70@s',
    height: '30@vs',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10@ms',
    color: '#000000',
    backgroundColor: '#ff461f',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...ScaledSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default CarouselScreen;
