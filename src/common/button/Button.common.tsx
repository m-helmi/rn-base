import {useTheme} from '@src/slices';
import React, {ReactNode} from 'react';
import {
  ViewStyle,
  View,
  StyleProp,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {AppSpinner, AppText, CustomTextStyle} from '@src/common';
import {styles} from './styles';
import {RootStore} from '@src/store';
import {useSelector} from 'react-redux';
interface Props {
  touchableOpacity?: boolean;
  title?: string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;

  onPress?: () => void;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  processing?: boolean;
  textStyle?: StyleProp<CustomTextStyle>;
  spinnerColor?: string;
  enabled?: boolean;
  textContainer?: StyleProp<ViewStyle>;
  activeOpacity?: number;
}

export const AppButton = (props: Props) => {
  const {
    onPress,
    processing,
    leftItem,
    rightItem,
    style,
    touchableOpacity,
    textStyle,
    title,
    spinnerColor = 'white',
    enabled = true,
    textContainer,
    activeOpacity,
    contentStyle,
  } = props;
  const {
    primary,
    titleColor,
    buttonTextColor,
    darkShadowColor,
    errorBackground,
  } = useTheme().colors;

  const {
    colors: {textColor},
    fonts,
  } = useSelector((state: RootStore) => state.theme);
  const fontFamily =
    fonts[StyleSheet.flatten<CustomTextStyle>(style)?.fontWeight || 'Regular'];
  const content = (
    <>
      {processing ? (
        <AppSpinner style={styles.spinner} color={spinnerColor} size={30} />
      ) : (
        <View
          style={[
            styles.content,
            contentStyle,
            styles.container,
            // {backgroundColor: enabled ? primary : darkShadowColor},
          ]}>
          {leftItem}
          <View style={[styles.text_container, textContainer]}>
            <AppText
              style={[
                styles.text,
                fontFamily,
                {
                  color: enabled ? buttonTextColor : titleColor,
                },
                textStyle,
              ]}>
              {title}
            </AppText>
          </View>
          {rightItem}
        </View>
      )}
    </>
  );

  const allStyles: StyleProp<ViewStyle> = [
    styles.container,
    {backgroundColor: enabled ? primary : darkShadowColor},
    style,
  ];

  return touchableOpacity ? (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.6}
      style={allStyles}
      onPress={enabled && !processing ? onPress : () => {}}>
      {content}
    </TouchableOpacity>
  ) : (
    <RectButton
      style={[allStyles]}
      activeOpacity={activeOpacity}
      enabled={enabled && !processing}
      onPress={onPress}>
      {content}
    </RectButton>
  );
};
