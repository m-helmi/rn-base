import {View} from 'react-native';
import React, {FC, useMemo} from 'react';
import {style} from './styles';
import {useTheme} from '@src/slices';
import {Easing, useDerivedValue, withTiming} from 'react-native-reanimated';
import {Notch} from './notch.common';
import {Checked} from './checked.common';
import {Toggle} from './toggle.common';

type Props = {active: boolean; loading?: boolean; onPress: () => void};
export const AppSwitchButton: FC<Props> = props => {
  const {active, onPress, loading} = props;

  //change notch and back ground color
  const translateColor = useDerivedValue(() => {
    return active || loading
      ? withTiming(1, {duration: 300, easing: Easing.inOut(Easing.linear)})
      : withTiming(0, {duration: 300, easing: Easing.inOut(Easing.linear)});
  }, [active, loading]);
  //color for styling
  const colors = useTheme().colors;
  //styles
  const styles = useMemo(() => style(colors), [colors]);

  return (
    <View style={styles.container}>
      <Toggle {...{onPress, translateColor}} />
      <Checked {...{active, loading, translateColor}} />
      <Notch {...{active, onPress, loading, translateColor}} />
    </View>
  );
};
