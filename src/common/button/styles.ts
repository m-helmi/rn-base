import {responsiveHeight} from '@src/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    height: responsiveHeight(7.5),
    alignSelf: 'stretch',
  },
  content: {
    borderRadius: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  text_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    flex: 1,
    alignSelf: 'center',
  },
});
