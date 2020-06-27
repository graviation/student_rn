/**
 * 个人中心
 */

import React from 'react';
import {Text, Button} from 'react-native';

const PersonalScreen: () => React = ({navigation}) => {
  return (
    <>
      <Text>个人中心</Text>
      <Button title={'Set'} onPress={() => navigation.navigate('SetScreen')} />
    </>
  );
};

export default PersonalScreen;
