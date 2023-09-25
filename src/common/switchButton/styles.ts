import {Colors} from '@src/utils';
import {StyleSheet} from 'react-native';

export const style = (colors: Colors) => {
  const {} = colors;
  return StyleSheet.create({
    notch: {
      width: 15,
      height: 15,
      borderRadius: 12.5,
      position: 'absolute',
      left: 3.5,
      zIndex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    spinner: {
      width: 15,
      height: 15,
      borderRadius: 12.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    closedChecked: {
      position: 'absolute',
      right: 5,
      zIndex: 1,
    },
    openedChecked: {
      position: 'absolute',
      left: 5,
      zIndex: 1,
    },
    hideChecked: {
      position: 'absolute',
      left: 5,
      width: 10,
      height: 10,
      zIndex: 2,
    },
    toggle: {
      height: 21,
      width: 35,
      borderRadius: 10.5,
    },
    container: {
      marginTop: 30,
      marginLeft: 9.75,
      alignSelf: 'flex-start',
      justifyContent: 'center',
    },
  });
};
