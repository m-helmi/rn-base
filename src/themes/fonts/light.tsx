import {CustomTextStyle} from '@src/common';
import {Platform} from 'react-native';

export const LIGHT_FONTS = {
  Regular: 'Famtree-Regular',
  Light: 'Famtree-Light',
  Bold: 'Famtree-Bold',
};
function createTextStyleObject<T extends Record<string, CustomTextStyle>>(
  o: T,
): T {
  return o;
}

export const FontWeight = createTextStyleObject({
  Regular: {
    fontWeight: 'Regular',
  },
  Light: {
    fontWeight: 'Light',
  },
  Bold: {
    fontWeight: 'Bold',
  },
});
