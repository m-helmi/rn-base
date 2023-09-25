import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {forwardRef, ReactNode, useMemo, useRef, useState} from 'react';
import {convertNumbers2English, Direction, IconType} from '@src/utils';
import Animated from 'react-native-reanimated';
import {styles as myStyle} from './style';
import {CustomTextStyle, AppText, AppIconButton} from '@src/common';
import {useIsLtr, useTheme} from '@src/slices';

interface Props extends Omit<TextInputProps, 'style'> {
  label?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  inputStyle?: ViewStyle | ViewStyle[];
  style?: StyleProp<CustomTextStyle>;
  error?: string;
  value?: string;
  noValidation?: boolean;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  inputHeight?: number;
  required?: boolean;
  isTouched?: boolean;
  borderColor?: string;
  title?: string;
  noPaddingTop?: boolean;
  innerViewStyle?: ViewStyle | ViewStyle[];
}

export const AppInput = forwardRef<TextInput, Props>((props, ref) => {
  const {
    label,
    leftItem,
    rightItem,
    containerStyle,
    style,
    error,
    noValidation,
    secureTextEntry,
    onBlur,
    onFocus,
    multiline,
    onChangeText,
    keyboardType,
    required,
    value,
    placeholder,
    title,
    inputStyle,
    noPaddingTop,
    innerViewStyle,
    ...rest
  } = props;

  const {colors, fonts} = useTheme();
  const styles = useMemo(() => myStyle(colors), [colors]);
  const {
    white,
    iconColor,
    borderColor,
    textHintColor,
    errorTextColor,
    textColor,
    placeHolderColor,
    secondary,
  } = colors;

  const direction = useIsLtr();
  const numbersKeybourdsTypes: (string | undefined)[] = [
    'decimal-pad',
    'number-pad',
    'phone-pad',
    'numeric',
  ];

  const [isFocus, setIsFocus] = useState(false);
  const [isPasswordHidden, hiddenPassword] = useState(secureTextEntry);
  const convertNumbersFlag = numbersKeybourdsTypes.includes(keyboardType);

  const fontFamily =
    fonts[StyleSheet.flatten<CustomTextStyle>(style)?.fontWeight || 'Regular'];

  const styleWithOutFontWeight: Omit<CustomTextStyle, 'fontWeight'> =
    StyleSheet.flatten<CustomTextStyle>(style);

  const writingDirection = direction == Direction.rtl ? 'rtl' : 'ltr';
  const textAlign = direction == Direction.rtl ? 'right' : 'left';

  const height =
    StyleSheet.flatten<ViewStyle>(containerStyle)?.height ||
    (multiline ? 95 : 59);

  const _onChangeText = text =>
    (onChangeText as Function)(convertNumbers2English(text));

  const _onFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const labelTextColor = useRef(textColor);
  const inputTextColor = useRef(textHintColor);
  const _iconColor = useRef(iconColor);
  const _borderColor = useRef(borderColor);

  labelTextColor.current = textColor;
  inputTextColor.current = textHintColor;
  _iconColor.current = iconColor;
  _borderColor.current = borderColor;

  if (isFocus) {
    labelTextColor.current = secondary;
    inputTextColor.current = textColor;
    _iconColor.current = secondary;
    _borderColor.current = borderColor;
  }

  if (error) {
    labelTextColor.current = errorTextColor;
    _borderColor.current = errorTextColor;
    _iconColor.current = errorTextColor;
  }

  const _animatedIsFocused = new Animated.Value(isFocus || value ? 1 : 0);

  const labelAnimatedStyles = {
    top: (height as number) / 3,
    position: 'absolute',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 5,
    alignItems: direction == Direction.ltr ? 'flex-end' : 'flex-start',
    width: '100%',
    transform: [
      {
        translateY: _animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -((height as number) / 2 - (multiline ? 25 : 13))],
        }),
      },
      {
        scale: _animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.97],
        }),
      },
    ],
  };

  return (
    <View style={containerStyle}>
      <View
        style={[
          {
            height,
            alignSelf: 'stretch',
            marginVertical: 3,
            flexDirection: 'row',
            backgroundColor: white,
            borderRadius: 4,
            // marginHorizontal: 10,
            borderColor: _borderColor.current,
            borderWidth: 1,
          },
          innerViewStyle,
        ]}>
        {leftItem}
        <View style={styles.content}>
          {label && (
            <>
              <Animated.View
                pointerEvents="none"
                style={labelAnimatedStyles as any}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginEnd: 5,
                    // backgroundColor: 'gray',
                  }}>
                  <AppText
                    style={[
                      styles.label,
                      {fontWeight: 'Medium', color: labelTextColor.current},
                    ]}>
                    {label}
                  </AppText>
                  {required && (
                    <AppText
                      style={{
                        color: isFocus ? '#FF0050' : 'grey',
                        marginHorizontal: 2,
                      }}>
                      *
                    </AppText>
                  )}
                </View>
              </Animated.View>
            </>
          )}

          <TextInput
            ref={ref}
            multiline={multiline}
            secureTextEntry={isPasswordHidden}
            placeholderTextColor={placeHolderColor}
            onFocus={_onFocus}
            keyboardAppearance={'light'}
            underlineColorAndroid="transparent"
            style={[
              styles.input,
              {
                color: inputTextColor.current,
                textAlign,
                writingDirection,
                textAlignVertical: multiline ? 'top' : 'bottom',
                paddingTop: noPaddingTop ? 0 : 20,
              },
              {
                fontFamily,
                height: multiline ? 70 : 20,
              },
              styleWithOutFontWeight,
              inputStyle,
            ]}
            onChangeText={convertNumbersFlag ? _onChangeText : onChangeText}
            keyboardType={keyboardType}
            autoCorrect={false}
            {...rest}
          />
          <View style={styles.title}>
            <AppText>{title}</AppText>
          </View>
        </View>
        {secureTextEntry && (
          <AppIconButton
            color={_iconColor.current}
            onPress={() => hiddenPassword(!isPasswordHidden)}
            containerStyle={styles.show_password_icon}
            size={20}
            name={isPasswordHidden ? 'eye-off' : 'eye'}
            type={IconType.feather}
          />
        )}
        {rightItem}
      </View>
      {!noValidation && error && (
        <AppText style={[styles.error, {color: errorTextColor}]}>
          {error}
        </AppText>
      )}
    </View>
  );
});
