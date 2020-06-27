/**
 * Linking
 */

import React from 'react';
import {Text, Button, Linking} from 'react-native';

const LinkingScreen: () => React = ({navigation}) => {
  return (
    <>
      <Button
        title={'打开知乎文章页面'}
        onPress={() => Linking.openURL('zhihu://articles/129067801')}
      />
      <Button
        title={'打开知乎专栏页面'}
        onPress={() => Linking.openURL('zhihu://columns/lishuai')}
      />
      <Button
        title={'打开拼多多砍价页面(现在是借助浏览器打开拼多多)'}
        onPress={() => {
          Linking.openURL('http://t.cn/A62HdJVF');
        }}
      />
    </>
  );
};

export default LinkingScreen;
