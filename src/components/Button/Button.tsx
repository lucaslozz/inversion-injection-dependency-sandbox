import {
  Text,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps as RNTouchableOpacityProps,
  TextStyle,
} from 'react-native';
import React from 'react';

interface ButtonProps extends RNTouchableOpacityProps {
  title: string;
}

export function Button({title, ...rnTouchableOpacityProps}: ButtonProps) {
  return (
    <TouchableOpacity style={$wrapper} {...rnTouchableOpacityProps}>
      <Text style={$text}>{title}</Text>
    </TouchableOpacity>
  );
}

const $wrapper: ViewStyle = {
  backgroundColor: '#074C4E',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
  marginBottom: 24,
};

const $text: TextStyle = {
  color: 'white',
};
