import {Dimensions} from 'react-native';
const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

// 11 pro max
export const designWidth = 414;
export const designHeight = 896;

const maxScreenWidth = screenWidth < 576 ? screenWidth : 576;

const _scaleWidth = maxScreenWidth / designWidth;
const _scaleHeight = screenHeight / designHeight;
const _scaleText = _scaleWidth;

const width = (value: number) => value * _scaleWidth;
const height = (value: number) => value * _scaleHeight;
const fontSize = (value: number) => value * _scaleText;

export {width, height, fontSize};
