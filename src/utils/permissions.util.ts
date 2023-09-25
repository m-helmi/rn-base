import {Platform} from 'react-native';
// import {
//   checkMultiple,
//   PERMISSIONS,
//   requestMultiple,
// } from 'react-native-permissions';

export const getCameraRequest = async () => {
  // const granted = await requestMultiple(
  //   Platform.OS == 'ios'
  //     ? [PERMISSIONS.IOS.CAMERA]
  //     : [
  //         PERMISSIONS.ANDROID.CAMERA,
  //         PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  //       ],
  // );
  return {cameraGranted: true};
};
export const getGalleryRequest = async () => {
  // const granted = await requestMultiple(
  //   Platform.OS == 'ios'
  //     ? [PERMISSIONS.IOS.PHOTO_LIBRARY]
  //     : [PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
  // );
  return {galleryGranted: true};
};
export const checkCameraRequest = async () => {
  // const status = await checkMultiple(
  //   Platform.OS == 'ios'
  //     ? [PERMISSIONS.IOS.CAMERA]
  //     : [
  //         PERMISSIONS.ANDROID.CAMERA,
  //         PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  //       ],
  // );
  return {cameraStatus: 'status'};
};
export const checkGalleryRequest = async () => {
  // const status = await checkMultiple(
  //   Platform.OS == 'ios'
  //     ? [PERMISSIONS.IOS.PHOTO_LIBRARY]
  //     : [PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
  // );
  return {galleryStatus: 'status'};
};
