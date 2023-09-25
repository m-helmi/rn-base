import {APPBAR_HEIGHT} from '@src/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  items: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    // alignContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    flexDirection: 'row',
  },
  content: {
    flex: 4,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  left: {
    left: 20,
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 10,
  },
  right: {
    right: 20,
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  back_icon_container: {
    height: 38,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideLabel: {justifyContent: undefined, paddingHorizontal: 18},
});
