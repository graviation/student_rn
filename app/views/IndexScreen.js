/**
 * 首页
 */

import React from 'react';
import {Text, Button} from 'react-native';
import TransparentStatusBar from '../components/TransparentStatusBar';

const IndexScreen: () => React = ({navigation}) => {
  return (
    <>
      <Text>首页</Text>
      <Button
        title={'二维码'}
        onPress={() => navigation.navigate('QrCodeScreen')}
      />
      <Button
        title={'人脸'}
        onPress={() => navigation.navigate('FaceRecognitionScreen')}
      />
    </>
  );
};

export default IndexScreen;
