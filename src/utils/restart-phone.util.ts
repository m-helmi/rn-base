// import { tabs_bottom } from '@src/app/app-lanch.app';
import {AppNavigation} from '@src/navigation';
// import RNRestart from 'react-native-restart';
export const restartPhone = (delay?: number) => {
  // AppNavigation.setRootBottomTabs(tabs_bottom);
  setTimeout(() => {
    // RNRestart.Restart();
  }, delay || 100);
};
