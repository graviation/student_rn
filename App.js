/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';

import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TransparentStatusBar from './app/components/TransparentStatusBar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeRoute: () => React$Node = ({route, navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Home1'} component={Home1Screen} />
      <Tab.Screen name={'Home2'} component={Home2Screen} />
    </Tab.Navigator>
  );
};

const HomeScreen: () => React$Node = ({route, navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TransparentStatusBar />
      <Text>Home Screen</Text>
      <Button
        title={'Go To Home1'}
        onPress={() => navigation.navigate('Home1')}
      />
      <Button
        title={'Go To Home2'}
        onPress={() => navigation.navigate('Home2')}
      />
    </View>
  );
};
const Home1Screen: () => React$Node = ({route, navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TransparentStatusBar />
      <Text>Home1 Screen</Text>
      <Button
        title={'Go To Home2'}
        onPress={() => navigation.navigate('Home2')}
      />
    </View>
  );
};
const Home2Screen: () => React$Node = ({route, navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TransparentStatusBar />
      <Text>Home2 Screen</Text>
      <Button
        title={'Go To Details'}
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 10086,
          })
        }
      />
    </View>
  );
};
const DetailsScreen: () => React$Node = ({route, navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar />
      <Text>Details Screen</Text>
      <Button
        title={'Go To Home2'}
        onPress={() => navigation.navigate('Home2')}
      />
    </View>
  );
};
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'HomeRoute'}
          component={HomeRoute}
          options={{
            title: '首页',
          }}
        />
        <Stack.Screen
          name={'Details'}
          component={DetailsScreen}
          options={{
            title: '详情',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
