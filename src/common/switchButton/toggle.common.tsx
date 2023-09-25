import {useTheme} from '@src/slices';
import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {style} from './styles';

type Props = {
  translateColor: Readonly<Animated.SharedValue<number>>;
  onPress: () => void;
};

export const Toggle = (props: Props) => {
  const {translateColor, onPress} = props;
  const colors = useTheme().colors;
  //styles
  const styles = useMemo(() => style(colors), [colors]);
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
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Animated.View style={[styles.toggle, rColorStyle]} />
      </TouchableOpacity>
    </>
  );
};
