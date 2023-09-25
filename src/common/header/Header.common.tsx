import React, {ReactElement, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Platform,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {AppIconButton, AppText} from '@src/common';
import {ElevationStyle, IconType, Lang} from '@src/utils';
import {FontWeight} from '@src/themes';
import {useCurrentLangSelector, useTheme} from '@src/slices';
import {AppNavigation} from '@src/navigation';
import Svg, {Path} from 'react-native-svg';

interface Props {
  title?: string;
  hideBack?: boolean;
  rightItem?: ReactElement;
  leftItem?: ReactElement;
  onBackPress?: () => void;
  withBorder?: boolean;
  customTitle?: ReactElement;
  noElevation?: boolean;
}

export const AppHeader = (props: Props) => {
  const {
    title,
    hideBack,
    rightItem,
    leftItem,
    onBackPress = () => {
      AppNavigation.pop();
    },
    withBorder,
    customTitle,
    noElevation,
  } = props;
  const {backgroundColor, borderColor, primary, white} = useTheme().colors;
  const borderBottomWidth = withBorder ? 1 : 0;

  const backAction = useCallback(() => {
    onBackPress();
    return true;
  }, [onBackPress]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [backAction]);

  const isRtl = useCurrentLangSelector() == Lang.ar;

  return (
    <>
      {/* <SafeAreaView style={{backgroundColor}} /> */}
      <View
        style={[
          styles.container,
          noElevation || Platform.OS === 'ios' ? {} : ElevationStyle,

          {
            backgroundColor: white,
            borderColor,
            borderBottomWidth,
          },
        ]}>
        <View style={[styles.items, styles.left]}>
          {!hideBack && (
            <TouchableOpacity
              onPress={onBackPress}
              style={{
                width: 40,
                justifyContent: 'center',
                height: 40,
                alignItems: isRtl ? 'flex-start' : 'flex-end',
                transform: [
                  {
                    scaleX: isRtl ? 1 : -1,
                  },
                ],
              }}>
              <SvgBack onPress={onBackPress} />
            </TouchableOpacity>
          )}
          {leftItem && <>{leftItem}</>}
        </View>

        <View
          style={[hideBack ? styles.hideLabel : styles.content, styles.items]}>
          <AppText style={[styles.title, FontWeight.Light]}>{title}</AppText>
          {customTitle}
        </View>

        <View style={[styles.items, styles.right]}>{rightItem}</View>
      </View>
    </>
  );
};

export  const SvgBack = props => (
  <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M6 12h10m-3-5 5 5-5 5"
      stroke="#314248"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.4}
      fill="none"
      fillRule="evenodd"
    />
  </Svg>
);
