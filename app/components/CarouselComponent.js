import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {StatusBar, View, Text} from 'react-native';

/**
 * 轮播图
 * @returns {*}
 * @constructor
 */
const CarouselComponent: () => React = () => {
  let _renderItem;
  _renderItem = ({item, index}) => {
    return (
      <View>
        <Text>123</Text>
      </View>
    );
  };

  return (
    <Carousel
      ref={(c) => {
        this._carousel = c;
      }}
      data={this.state.entries}
      renderItem={this._renderItem}
      sliderWidth={300}
      itemWidth={300}
    />
  );
};

export default CarouselComponent;
