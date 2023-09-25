import I18n from 'react-native-i18n';
import ar from '../translations/ar.translation';
export type Words = typeof ar;
export interface TranslationProps<Translation> {
  params?: {} | undefined;
  _key?: string;
}
export const translate = <Translation extends keyof Words>(
  word: Translation,
  props?: TranslationProps<Translation>,
) => {
  return props?._key !== undefined
    ? I18n.t(word, props.params)[props._key]
    : I18n.t(word, props?.params);
};
