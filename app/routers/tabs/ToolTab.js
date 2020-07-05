/**
 * 休闲中心
 */

import React from 'react';
import {Text, Button, View} from 'react-native';
import Video from 'react-native-video';
import TransparentStatusBar from '../../components/TransparentStatusBar';

const ToolTab: () => React = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TransparentStatusBar />
      <Button
        title={'轮播图测试'}
        onPress={() => navigation.navigate('CarouselScreen')}
      />
      {/*<Video*/}
      {/*  style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}*/}
      {/*  source={{*/}
      {/*    uri: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8',*/}
      {/*    type: 'm3u8',*/}
      {/*  }}*/}
      {/*  resizeMode={'contain'}*/}
      {/*  repeat={false}*/}
      {/*/>*/}
    </View>
  );
};

export default ToolTab;
