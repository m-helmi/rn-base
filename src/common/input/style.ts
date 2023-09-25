import {store} from '@src/store';
import {Colors, Lang} from '@src/utils';
import {StyleSheet} from 'react-native';

export const styles = (colors: Colors) => {
  const {} = colors;
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    content: {
      flex: 1,
      paddingTop: 7,
      justifyContent: 'space-between',
      alignSelf: 'stretch',
    },
    input: {
      flex: 1,
      paddingHorizontal: 14,
      fontSize: 14,
      paddingTop: 0,
      textAlign: 'right',
    },
    label: {
      // marginLeft: 5,
      fontSize: 13,
    },
    error: {
      fontSize: 12,
      paddingHorizontal: 16,
      paddingTop: 1,
      // paddingBottom: 5,
    },
    AnimatedLabelStyle: {},
    show_password_icon: {
      paddingRight: store.getState().lang.lang == Lang.ar ? 16 : undefined,
      paddingLeft: store.getState().lang.lang === Lang.ar ? undefined : 8,
    },
    title: {
      position: 'absolute',
      alignSelf: 'flex-end',
      bottom: 12,
    },
  });
};
