import I18n from 'react-native-i18n';
import en from './en.translation';
import ar from './ar.translation';
import {Direction, Lang} from '@src/utils';
import {store} from '@src/store';
import {changeDirection} from '@src/slices/lang.slice';
import {I18nManager} from 'react-native';
import dayjs from 'dayjs';
// import {LocaleConfig} from 'react-native-calendars';

export const availableLanguages = {
  ar,
  en,
};
export const langConfig = (lang?: Lang) => {
  let defaultLang = lang;

  let currentLang = I18n.currentLocale()?.split('-')[0];

  if (!Lang[currentLang as Lang]) {
    currentLang = Lang.ar;
  }
  I18n.translations = availableLanguages;

  store.dispatch(
    changeDirection(defaultLang === Lang.ar ? Direction.rtl : Direction.ltr),
  );

  I18n.locale = defaultLang || lang || currentLang;
  //   LocaleConfig.locales = availableLanguages;
  //   LocaleConfig.defaultLocale = I18n.locale;
  I18n.defaultLocale = I18n.locale;
  I18nManager.allowRTL(I18n.locale == Lang.ar ? true : false);
  dayjs.locale(I18n.locale);
  I18nManager.forceRTL(I18n.locale == Lang.ar);
  return I18n.locale;
};
