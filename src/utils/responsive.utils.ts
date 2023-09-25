import {store} from '@src/store';
import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import {Direction} from '.';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {RFPercentage} from 'react-native-responsive-fontsize';
const viewPortSize = {width: 375, height: 850};

const FONT_SIZE_DELTA = 1.1;
const {roundToNearestPixel, } = PixelRatio;

const decorateHeights = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const APPBAR_HEIGHT = Platform.OS === 'android' ? 70 : 74;

export const {width: windowWidth} = Dimensions.get('window');
export const windowHeight = Dimensions.get('window').height - decorateHeights!;

export const {width: screenWidth} = Dimensions.get('screen');
export const screenHeight = Dimensions.get('screen').height - decorateHeights!;

const maxWidth = 420;
const maxHeight = 800;

export const aspectRatio = () => windowHeight / windowWidth;

export const responsiveWidth = w =>
  roundToNearestPixel(Math.min(maxWidth, windowWidth) * (w / 100));

export const responsiveHeight = h =>
  roundToNearestPixel(Math.min(maxHeight, windowHeight) * (h / 100));

export const heightPercent = h =>
  parseFloat(((h / windowHeight) * 100).toFixed(2));

export const moderateScale = (size, factor = 0.5) => {
  const rw = Math.min(maxWidth, windowWidth) * (size / 100);

  return roundToNearestPixel(size + (rw - size) * factor);
};

export const responsiveFontSize = (f, factor = 0.5) => {
  const rw = Math.min(maxWidth, windowWidth) * (f / 100);
  const state = store.getState();
  return roundToNearestPixel(
    f +
      (rw - f) *
        factor *
        (state.lang.direction == Direction.rtl ? 1 : FONT_SIZE_DELTA),
  );
};

export const responsivesrcFont = (value: number): number =>
  RFPercentage((value / viewPortSize.height) * 100);
export const responsivesrcHeight = (value: number): number =>
  hp((parseFloat(String(value)) / viewPortSize.height) * 100);
export const responsivesrcWidth = (value: number): number =>
  wp((value / viewPortSize.width) * 100);

export const HEADER_MAX_HEIGHT = 350;
export const HEADER_MIN_HEIGHT = 80;
export const HEADER_HALF = 150;
export const cardWidth = responsivesrcWidth(100) - 64 + 20;
export const STATUS_BAR_HEIGHT = getStatusBarHeight(true);
export const FULLWIDTH = wp('96%');
