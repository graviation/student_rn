import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexScreen from '../views/IndexScreen';
import PersonalScreen from '../views/PersonalScreen';

/**
 * 这里定义底部导航栏标签
 */
const Tab = createBottomTabNavigator();
const Tabs: () => React = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'IndexScreen'}
        component={IndexScreen}
        options={{title: '首页'}}
      />
      <Tab.Screen
        name={'PersonalScreen'}
        component={PersonalScreen}
        options={{title: '我的'}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
