import {View, ViewStyle} from 'react-native';
import {ToolBar} from '../../components/ToolBar/ToolBar';
import React from 'react';
import {Button} from '../../components/Button/Button';

export function HomeScreen() {
  return (
    <View style={$wrapper}>
      <ToolBar value={0} />
      <Button title="Add to Cart" />
      <Button title="Remove from Cart" />
      <Button title="Clean Cart" />
    </View>
  );
}

const $wrapper: ViewStyle = {
  backgroundColor: 'white',
  flex: 1,
  marginHorizontal: 16,
};
