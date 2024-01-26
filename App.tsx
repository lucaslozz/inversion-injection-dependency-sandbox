import React from 'react';

import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
