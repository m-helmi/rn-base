import React, {useRef} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props extends FastImageProps {
  blurHash?: string;
}

export const AppImage: React.FC<Props> = props => {
  const {blurHash, style, ...rest} = props;
  //   const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useSharedValue(1);

  const fadeOut = () => {
    fadeAnim.value = withTiming(0, {
      duration: 500,
      easing: Easing.cubic,
    });
  };
  const rnOpacity = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  }, []);
  return (
    <>
      <FastImage onLoadEnd={fadeOut} style={style} {...rest} />
      {blurHash && (
        <Animated.View style={[style, rnOpacity, {position: 'absolute'}]}>
          {/* <Blurhash blurhash={blurHash} style={{flex: 1}} /> */}
        </Animated.View>
      )}
    </>
  );
};
