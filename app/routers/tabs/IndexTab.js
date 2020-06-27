/**
 * 首页
 */

import React from 'react';
import {Text, Button} from 'react-native';

const IndexTab: () => React = ({navigation}) => {
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
      <Button
        title={'打开其它APP测试'}
        onPress={() => navigation.navigate('LinkingScreen')}
      />
      <Button
        title={'聊天室'}
        onPress={() => navigation.navigate('ChatRoomScreen')}
      />
    </>
  );
};

export default IndexTab;
