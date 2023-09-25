import {useIsLtr, useTheme} from '@src/slices';
import {Direction, IconType} from '@src/utils';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {AppIcon} from '../icon/icon.common';
import {style} from './styles';

type Props = {
  active: boolean;
  loading?: boolean;
  translateColor: Readonly<Animated.SharedValue<number>>;
};

export const Checked = (props: Props) => {
  const {active, loading, translateColor} = props;
  const colors = useTheme().colors;
  //styles
  const styles = useMemo(() => style(colors), [colors]);
  const direction = useIsLtr();
  // visible checked

  const checked = useDerivedValue(() => {
    return active || loading
      ? withDelay(
          300,
          withTiming(1, {duration: 300, easing: Easing.inOut(Easing.linear)}),
        )
      : withDelay(
          300,
          withTiming(0, {duration: 300, easing: Easing.inOut(Easing.linear)}),
        );
  }, [active, loading]);
  //change back ground style
  //
  const rColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateColor.value,
      [0, 1, 0],
      [colors.pickerIconcolor, colors.secondary, colors.pickerIconcolor],
    );
    return {
      backgroundColor,
    };
  }, [translateColor]);
  // visible checked style
  const translateXOutPut = [0, direction == Direction.ltr ? 13 : -13, 0];

  const rCheckedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(checked.value, [0, 1, 0], translateXOutPut);

    return {transform: [{translateX}]};
  }, [checked]);
  return (
    <>
      <Animated.View style={[styles.hideChecked, rCheckedStyle, rColorStyle]} />
      <View style={styles.openedChecked}>
        <AppIcon name="check1" color={colors.white} size={7} flip={false} />
      </View>
      <View style={styles.closedChecked}>
        <AppIcon
          name="close"
          type={IconType.ionicons}
          color={colors.white}
          size={10}
          flip={false}
        />
      </View>
    </>
  );
};
