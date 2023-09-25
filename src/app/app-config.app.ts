import customIcon from '@src/assets/selection.json';
import {registerCustomIconType} from '@src/utils';
import {listenToInternetStatus} from '@src/slices';
import {store, storeConfig} from '@src/store';
import {registerScreens, setNavigationDefaultOptions} from '@src/navigation';
import {langConfig} from '@src/translations';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import {LogBox} from 'react-native';
require('dayjs/locale/ar');

//general app configuration
export const appConfig = async () => {
  //register srceens
  registerScreens();
  // store config
  await storeConfig();
  // dayjs config
  dayjs.extend(relativeTime);
  dayjs.extend(duration);
  //icons
  registerCustomIconType(customIcon);
  //languages and local config
  langConfig(store.getState().lang.lang);
  //listen to network
  store.dispatch(listenToInternetStatus());
  // default option  navigation config
  setNavigationDefaultOptions();
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    'new NativeEventEmitter',
  ]);
};
