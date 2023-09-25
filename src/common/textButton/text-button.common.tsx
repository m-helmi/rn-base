import React, {ReactNode} from 'react';
import {ViewStyle, View, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {styles} from './styles';
import {AppText} from '@src/common';
import {useTheme} from '@src/slices';

interface Props {
  touchableOpacity?: boolean;
  title?: string;
  style?: ViewStyle;
  onPress?: () => void;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  activeOpacity?: number | undefined;
}

export const AppTextButton = (props: Props) => {
  const {
    onPress,
    leftItem,
    rightItem,
    style,
    title,
    activeOpacity,
    touchableOpacity,
  } = props;
  const {
    colors: {primary},
  } = useTheme();

  const content = (
    <View style={[styles.content]}>
      {leftItem}
      <View style={styles.text_container}>
        <AppText style={[styles.text, {color: primary, fontWeight: 'Medium'}]}>
          {title}
        </AppText>
      </View>
      {rightItem}
    </View>
  );

  return touchableOpacity ? (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.container, style]}
      onPress={onPress}>
      {content}
    </TouchableOpacity>
  ) : (
    <RectButton style={[styles.container, style]} onPress={onPress}>
      {content}
    </RectButton>
  );
};
