/**
 * 播放电视频道页面
 */

import React, {useState} from 'react';
import {View, ScrollView, Text, RefreshControl} from 'react-native';
import Video from 'react-native-video';
import TransparentStatusBar from '../components/TransparentStatusBar';
import AppColors from '../utils/AppColors';

const TVPlayScreen: () => React = ({route, navigation}) => {
  const [refreshing, setRefreshing] = useState(true);
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: refreshing ? '#fff' : '#000',
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={[AppColors.red, AppColors.blue, AppColors.yellow]}
          progressBackgroundColor="#fff"
          enabled={true}
        />
      }>
      <TransparentStatusBar />
      <Video
        style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
        allowsExternalPlayback={false}
        controls={false}
        fullscreen={true}
        onReadyForDisplay={() => setRefreshing(false)}
        source={{
          uri: route.params.m3u8,
          type: 'm3u8',
        }}
        resizeMode={'contain'}
        repeat={false}
      />
    </ScrollView>
  );
};

export default TVPlayScreen;
