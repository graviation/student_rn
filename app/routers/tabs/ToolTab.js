/**
 * 休闲中心
 */

import React from 'react';
import {Text, Button, View, TouchableOpacity, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, scale} from 'react-native-size-matters';
import TransparentStatusBar from '../../components/TransparentStatusBar';
import Colors from '../../utils/AppColors';

const {width, height} = Dimensions.get('window');
const items = [
  {id: 1, title: 'CCTV 1', m3u8: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8'},
  {id: 2, title: 'CCTV 2', m3u8: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8'},
  {id: 3, title: 'CCTV 3', m3u8: 'http://ivi.bupt.edu.cn/hls/btv10.m3u8'},
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
              backgroundColor: Colors.blue,
              borderRadius: moderateScale(5),
              justifyContent: 'center',
              alignItems: 'center',
              width: width / 6,
            }}>
            <Text style={{color: Colors.black}}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default ToolTab;
