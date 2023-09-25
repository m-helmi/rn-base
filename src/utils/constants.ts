import {Platform} from 'react-native';

export const PASSWORD_VALIDATION_REGEX =
  /(?=.*[A-Za-z])(?=.*[0-9])[A-Za-zd$@$!%_*_#?&-_.]{8,}$/;
export const EMAIL_VALIDATION_REGEX =
  /^[a-zA-Z]([\._]{0,1}[a-zA-Z0-9])*@([a-zA-Z][a-zA-Z0-9]*[-]?[a-zA-Z]+)\.[a-zA-Z][a-zA-Z0-9]{1,3}$/;
export const PASSWORD_VALIDATION_REGIX =
  /(?=.*[A-Za-z])(?=.*[0-9])[A-Za-zd$@$!%_*_#?&-_.]{8,}$/;
export const GOOGLE_KEY = 'AIzaSyAavp7NADlaLQKh48RoBZbNuS-4-X4d8F4';

export const isIos = (() => Platform.OS === 'ios')();
