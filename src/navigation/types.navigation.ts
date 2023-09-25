import React from 'react';

import {Test, Auth} from '@src/screens';
import {NavigationComponentProps, Options} from 'react-native-navigation';
import {createScreen} from './screens-register.navigation';

export interface Screen {
  name: keyof RootStackParamList;
  component: CustomNavigationFunctionComponent<any>;
  contextProvider?: React.FC;
}
export interface CustomNavigationFunctionComponent<
  route extends keyof RootStackParamList,
> extends React.FunctionComponent<
    RootStackParamList[route] & NavigationComponentProps
  > {
  options?: (
    props: RootStackParamList[route] | ({} & NavigationComponentProps),
  ) => Options;
}
export const screens: Screen[] = [
  {name: 'test', component: Test},
  {name: 'Auth', component: Auth},
];

export const registerScreens = () => {
  screens.forEach(screen => createScreen(screen));
};

export type RootStackParamList = {
  phoneCheck: {};
  otp: {phone: string};
  home: {};
  myOrder: {};
  sideMenu: {};
  notifications: {};
  favorite: {};
  settings: {};
  aboutApp: {};
  complaintsAndSuggestions: {};
  termsAndConditions: {};
  login: {};
  signUp: {};
  branches: {};
  wallet: {};
  myAccount: {};
  jobs: {};
  jobDetails: {jobId: number};
  test: {};
  Auth: {};
};
