import {Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {Icon} from '../Icon/Icon';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';

interface ToolBarProps {
  value: number;
}

export function ToolBar({value}: ToolBarProps) {
  const {top} = useAppSafeArea();
  return (
    <View style={$wrapper}>
      <View style={[$containerProps, $shadowProps, {paddingTop: top}]}>
        <Text style={$textStyle}>{value}</Text>
        <Icon name="shop" size={40} />
      </View>
    </View>
  );
}

const $wrapper: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 48,
  marginHorizontal: -16,
  backgroundColor: 'white',
};

const $textStyle: TextStyle = {
  fontSize: 24,
  color: 'black',
};

const $containerProps: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: 'white',
  paddingBottom: 12,
  paddingHorizontal: 8,
  gap: 8,
  alignItems: 'center',
  flex: 1,
  justifyContent: 'flex-end',
};

const $shadowProps: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};
