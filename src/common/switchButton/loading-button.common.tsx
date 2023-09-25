import {useTheme} from '@src/slices';
import React, {useMemo} from 'react';
import {style} from './styles';

type Props = {};

export const LoadingButton = (props: Props) => {
  const {} = props;
  const colors = useTheme().colors;
  //styles
  const styles = useMemo(() => style(colors), [colors]);
  return <></>;
};
