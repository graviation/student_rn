/**
 * 休闲中心
 */

import React from 'react';
import {
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TransparentStatusBar from '../../components/TransparentStatusBar';
import AppColors from '../../utils/AppColors';

const {width, height} = Dimensions.get('window');
const items = [
  {id: 1, title: 'CCTV 1', m3u8: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8'},
  {id: 2, title: 'CCTV 2', m3u8: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8'},
  {id: 3, title: 'CCTV 3', m3u8: 'http://ivi.bupt.edu.cn/hls/btv10.m3u8'},
  {
    id: 4,
    title: 'IPTV',
    m3u8: 'https://iptv-org.github.io/iptv/channels/cn.m3u',
  },
  {
    id: 5,
    title: '直播中国',
    m3u8:
      'https://gcalic.v.myalicdn.com/gc/wgw05_1/index.m3u8?contentid=2820180516001',
  },
];
const ToolTab: () => React = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: scale(10)}}>
      <TransparentStatusBar />
      {items.map((item, i) => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate('TVPlayScreen', {m3u8: item.m3u8})
            }
            style={{
              borderRadius: moderateScale(5),
              justifyContent: 'center',
              alignItems: 'center',
              width: width / 6,
            }}>
            <Text style={{color: AppColors.black}}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
      <Image
        style={{
          width: moderateScale(60),
          height: moderateScale(60),
        }}
        resizeMode={'contain'}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/zh/6/65/CCTV-1_Logo.png',
        }}
      />
      <Image
        style={{
          width: moderateScale(60),
          height: moderateScale(60),
        }}
        resizeMode={'contain'}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/zh/f/fd/CCTV-10_Logo.png',
        }}
      />
      <Image
        style={{
          width: moderateScale(60),
          height: moderateScale(50),
        }}
        resizeMode={'contain'}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/zh/thumb/3/34/CCTV-2_Logo.svg/800px-CCTV-2_Logo.svg.png',
        }}
      />
      <Image
        style={{
          width: moderateScale(60),
          height: moderateScale(60),
        }}
        resizeMode={'contain'}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/zh/3/34/CCTV-3_Logo.png',
        }}
      />
    </SafeAreaView>
  );
};

export default ToolTab;
