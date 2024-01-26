import {View, ViewStyle} from 'react-native';
import {ToolBar} from '../../components/ToolBar/ToolBar';
import React from 'react';
import {Button} from '../../components/Button/Button';
import {useCart} from '../../hooks/useCart';

export function HomeScreen() {
  const {addToCart, cleanCart, removeFromCart, cart} = useCart();
  return (
    <View style={$wrapper}>
      <ToolBar value={cart} />
      <Button title="Add to Cart" onPress={addToCart} />
      <Button title="Remove from Cart" onPress={removeFromCart} />
      <Button title="Clean Cart" onPress={cleanCart} />
    </View>
  );
}

const $wrapper: ViewStyle = {
  backgroundColor: 'white',
  flex: 1,
  marginHorizontal: 16,
};
