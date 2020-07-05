/**
 * 半透明的状态栏
 */

import React from 'react';
import {StatusBar} from 'react-native';

const TransparentStatusBar: () => React = () => {
  return (
    <StatusBar
      barStyle={'light-content'}
      translucent={true}
      backgroundColor={'rgba(255,255,255,0)'} //颜色透明
    />
  );
};
export default TransparentStatusBar;
