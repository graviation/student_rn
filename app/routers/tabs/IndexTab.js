/**
 * 首页
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  TouchableOpacity,
  Dimensions,
  Platform,
  View,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';

const IndexTab: () => React = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.content_style} animation={'fadeIn'} useNativeDriver>
        <Text>
          首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页
        </Text>
        <TouchableOpacity
          style={styles.button_style}
          onPress={() => navigation.navigate('QrCodeScreen')}>
          <Text>二维码</Text>
        </TouchableOpacity>
        <Button
          title={'二维码'}
          onPress={() => navigation.navigate('QrCodeScreen')}
        />
        <Button
          title={'人脸'}
          onPress={() => navigation.navigate('FaceRecognitionScreen')}
        />
        <Button
          title={'打开其它APP测试'}
          onPress={() => navigation.navigate('LinkingScreen')}
        />
        <Button
          title={'聊天室'}
          onPress={() => navigation.navigate('ChatRoomScreen')}
        />
      </View>
    </SafeAreaView>
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
});

export default IndexTab;
