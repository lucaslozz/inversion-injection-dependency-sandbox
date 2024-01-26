import React from 'react';

import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CartProvider} from './src/services/Cart/implementations/Context/CartContext';

export function App(): JSX.Element {
  return (
    <CartProvider>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </CartProvider>
  );
}
