import React from 'react';
import {ViewStyle, View, TouchableOpacity} from 'react-native';
import {AppIcon, Props as IconProps} from '../icon/icon.common';
import {styles} from './styles';

interface Props extends IconProps {
  containerStyle?: ViewStyle;
  onPress?: () => void;
  enabled?: boolean;
  flip?: boolean;
  activeOpacity?: number | undefined;
}

export const AppIconButton = (props: Props) => {
  const {
    onPress,
    containerStyle,
    enabled = true,
    flip,
    activeOpacity,
    size,
    ...rest
  } = props;
  return (
    <>
      <TouchableOpacity
        style={[styles.content, styles.container, containerStyle]}
        activeOpacity={activeOpacity}
        // enabled={enabled}
        onPress={onPress}>
        <AppIcon size={size} flip={flip} {...rest} />
      </TouchableOpacity>
    </>
  );
};
