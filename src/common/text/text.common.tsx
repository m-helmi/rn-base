import React from 'react';
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  StyleSheet,
  PixelRatio,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootStore, store} from '@src/store';
import {styles} from './style';
import {useCurrentLangSelector, useIsLtr} from '@src/slices';
import {LIGHT_FONTS} from '@src/themes';
import {Direction, Lang} from '@src/utils';
export interface CustomTextStyle extends Omit<TextStyle, 'fontWeight'> {
  fontWeight?: keyof typeof LIGHT_FONTS;
}

interface Props extends Omit<TextProps, 'style'> {
  style?: StyleProp<CustomTextStyle>;
}

export const AppText: React.FC<Props> = props => {
  const {children, style, ...rest} = props;
  const {
    colors: {textColor},
    fonts,
  } = useSelector((state: RootStore) => state.theme);

  const fontFamily =
    fonts[StyleSheet.flatten<CustomTextStyle>(style)?.fontWeight || 'Regular'];

  const writingDirection = useIsLtr();


  return (
    <Text
      {...rest}
      style={[
        styles.text,
        {
          color: textColor,
          writingDirection,
        },
        style,

        {fontFamily, fontWeight: undefined},
      ]}>
      {children}
      {/* <Text allowFontScaling={false} style={styles.orientation}>
        {writingDirection === Direction.rtl ? 'م' : 'm'}
      </Text> */}
    </Text>
  );
};
