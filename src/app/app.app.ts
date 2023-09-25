import {Navigation} from 'react-native-navigation';
import {appConfig} from './';
import {onAppLaunch} from './app-lanch.app';

export const startApp = async () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    await appConfig();
    onAppLaunch();
  });
};
