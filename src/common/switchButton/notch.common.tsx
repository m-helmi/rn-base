import {useIsLtr, useTheme} from '@src/slices';
import {Direction, ElevationStyle} from '@src/utils';
import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {AppSpinner} from '../spinner/Spinner.common';
import {style} from './styles';

type Props = {
  active: boolean;
  onPress: () => void;
  loading?: boolean;
  translateColor: Readonly<Animated.SharedValue<number>>;
};

export const Notch = (props: Props) => {
  const {active, onPress, loading, translateColor} = props;
  const colors = useTheme().colors;
  const direction = useIsLtr();

  //styles
  const styles = useMemo(() => style(colors), [colors]);
  //output interpolate
  const translateXOutPut = [0, direction == Direction.ltr ? 13 : -13, 0];

  // translateX notch  value
  const translate = useDerivedValue(() => {
    return active || loading
      ? withTiming(-14, {duration: 300, easing: Easing.inOut(Easing.linear)})
      : withTiming(0, {duration: 300, easing: Easing.inOut(Easing.linear)});
  }, [active, loading]);
  // chang translate x notch
  const rTranslateStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      translate.value,
      [0, -14, 0],
      translateXOutPut,
    );
    const backgroundColor = interpolateColor(
      translateColor.value,
      [1, 0, 1],
      [colors.white, colors.secondary, colors.white],
    );
    return {transform: [{translateX}], backgroundColor};
  }, [translate, translateColor]);
  return (
    <>
      <Animated.View
        style={[
          styles.notch,
          ElevationStyle,
          rTranslateStyle,
          // rnStyle,
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.spinner}
          onPress={onPress}>
          {loading ? (
            <AppSpinner
              size={10}
              color={loading || active ? colors.secondary : colors.white}
            />
          ) : (
            <></>
          )}
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};
