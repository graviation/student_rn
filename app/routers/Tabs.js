import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IndexTab from './tabs/IndexTab';
import PersonalTab from './tabs/PersonalTab';
import ToolTab from './tabs/ToolTab';

/**
 * 这里定义底部导航栏标签
 */
const Tab = createBottomTabNavigator();
const Tabs: () => React = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'IndexTab') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'ToolTab') {
            iconName = focused ? 'grid' : 'grid';
          } else if (route.name === 'PersonalTab') {
            iconName = focused ? 'user' : 'user';
          }
          // You can return any component that you like here!
          return <FeatherIcon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
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
