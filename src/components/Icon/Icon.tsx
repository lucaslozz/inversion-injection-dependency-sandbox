import {Pressable, PressableProps as RNPressableProps} from 'react-native';
import React from 'react';
import {ShopIcon} from './ShopIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps extends RNPressableProps {
  name: IconName;
  color: string;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,
  color = '#000',
  size,
  onPress,
  ...pressableProps
}: IconProps) {
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={16} onPress={onPress} {...pressableProps}>
        <SVGIcon color={color} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={color} size={size} />;
}

const iconRegistry = {
  shop: ShopIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
