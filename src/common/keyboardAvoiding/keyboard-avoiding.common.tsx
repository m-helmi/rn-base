import React, {FC, ReactElement} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  ScrollView,
  ScrollViewProps,
} from 'react-native';
import {styles} from './styles';

interface Props extends KeyboardAvoidingViewProps {
  childAfterScrolling?: ReactElement;
  scrollViewProps?: ScrollViewProps;
}
export const AppKeyboardAvoiding: FC<Props> = props => {
  const {
    keyboardVerticalOffset,
    style,
    childAfterScrolling,
    behavior,
    children,
    scrollViewProps,
    ...rest
  } = props;

  return (
    <ScrollView
      showsVerticalScrollIndicator={
        scrollViewProps?.showsVerticalScrollIndicator || false
      }>
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardVerticalOffset || 0}
        style={[styles.keyboardView, style]}
        behavior={behavior || Platform.OS == 'ios' ? 'padding' : undefined}
        {...rest}>
        <ScrollView
          showsVerticalScrollIndicator={
            scrollViewProps?.showsVerticalScrollIndicator || false
          }
          style={[styles.scrollContainer, scrollViewProps?.style]}
          {...scrollViewProps}>
          {children}
        </ScrollView>
        {childAfterScrolling}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
