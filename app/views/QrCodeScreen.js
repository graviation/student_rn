/**
 * 二维码
 */

import React from 'react';
import {Text, Button} from 'react-native';

const QrCodeScreen: () => React = ({navigation}) => {
  return (
    <>
      <Text>二维码</Text>
      <Button
        title={'人脸'}
        onPress={() => navigation.navigate('FaceRecognitionScreen')}
      />
      <Button title={'Set'} onPress={() => navigation.navigate('SetScreen')} />
    </>
  );
};

export default QrCodeScreen;
