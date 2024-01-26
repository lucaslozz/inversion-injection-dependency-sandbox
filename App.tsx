import React from 'react';

import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {CartProvider} from './src/services/Cart/implementations/context/CartContext';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/services/Cart/implementations/redux/store';

export function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </ReduxProvider>
  );
}
