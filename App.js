/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import Stacks from './app/routers/Stacks';

const App: () => React$Node = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Stacks />
    </SafeAreaProvider>
  );
};

export default App;
