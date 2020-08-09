import React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './Tabs';
import QrCodeScreen from '../views/QrCodeScreen';
import FaceRecognitionScreen from '../views/FaceRecognitionScreen';
import SetScreen from '../views/SetScreen';
import LinkingScreen from '../views/LinkingScreen';
import ChatRoomScreen from '../views/ChatRoomScreen';
import CarouselScreen from '../views/CarouselScreen';
import TVPlayScreen from '../views/TVPlayScreen';

/**
 * 定义所有的导航
 */
const Stack = createStackNavigator();
const Stacks: () => React = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        })}
        headerMode={'none'}>
        <Stack.Screen name={'Tabs'} component={Tabs} />
        <Stack.Screen name={'QrCodeScreen'} component={QrCodeScreen} />
        <Stack.Screen
          name={'FaceRecognitionScreen'}
          component={FaceRecognitionScreen}
        />
        <Stack.Screen name={'SetScreen'} component={SetScreen} />
        <Stack.Screen name={'LinkingScreen'} component={LinkingScreen} />
        <Stack.Screen name={'ChatRoomScreen'} component={ChatRoomScreen} />
        <Stack.Screen name={'CarouselScreen'} component={CarouselScreen} />
        <Stack.Screen name={'TVPlayScreen'} component={TVPlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
