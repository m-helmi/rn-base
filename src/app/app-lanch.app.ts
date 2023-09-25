import {AppNavigation} from '@src/navigation';
import {store} from '@src/store';

export const tabs_bottom = ['home', 'branches', 'jobs', 'wallet'];

export const onAppLaunch = () => {
  const roles = store.getState().auth?.user;

  if (roles) {
    //authenticated
    // AppNavigation.setRootBottomTabs(tabs_bottom);
    AppNavigation.setRootScreen('test');
  } else {
    // noAuth;
    AppNavigation.setRootScreen('Auth');
  }
};
