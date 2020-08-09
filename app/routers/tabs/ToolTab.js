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
import {
  moderateScale,
  scale,
  verticalScale,
  ScaledSheet,
} from 'react-native-size-matters';
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
        style={styles.imageStyle}
        resizeMode={'contain'}
        source={{
          uri:
            'https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2018/7/3/1530586773068_87.png',
        }}
      />
      <Image
        style={styles.imageStyle}
        resizeMode={'contain'}
        source={{
          uri:
            'https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2018/7/3/1530586768395_210.png',
        }}
      />
      <Image
        style={styles.imageStyle}
        resizeMode={'contain'}
        source={{
          uri:
            'https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2018/7/3/1530586763825_455.png',
        }}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  imageStyle: {
    height: '24@vs',
    marginTop: '15@vs',
  },
});

export default ToolTab;
