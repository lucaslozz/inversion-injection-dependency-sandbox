import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {ToolBar} from '../../components/ToolBar/ToolBar';
import React from 'react';

export function HomeScreen() {
  return (
    <View style={$wrapper}>
      <ToolBar value={0} />
      <TouchableOpacity />
    </View>
  );
}

const $wrapper: ViewStyle = {
  backgroundColor: 'white',
  flex: 1,
};
