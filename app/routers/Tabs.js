import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexTab from './tabs/IndexTab';
import PersonalTab from './tabs/PersonalTab';
import ToolTab from './tabs/ToolTab';

/**
 * 这里定义底部导航栏标签
 */
const Tab = createBottomTabNavigator();
const Tabs: () => React = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'IndexTab'}
        component={IndexTab}
        options={{title: '首页'}}
      />
      <Tab.Screen
        name={'ToolTab'}
        component={ToolTab}
        options={{title: '工具'}}
      />
      <Tab.Screen
        name={'PersonalTab'}
        component={PersonalTab}
        options={{title: '我的'}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
