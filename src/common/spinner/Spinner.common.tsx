import {useTheme} from '@src/slices';
import React from 'react';
import {Chase} from 'react-native-animated-spinkit';
import {SpinnerProps} from 'react-native-animated-spinkit/lib/typescript/SpinnerProps';
interface Props extends Partial<SpinnerProps> {}

export const AppSpinner: React.FC<Props> = props => {
  const {color, ...rest} = props;
  const {primary} = useTheme().colors;
  return <Chase color={color || primary} {...rest} />;
};
