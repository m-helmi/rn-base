import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

export enum IconType {
  antDesign,
  entypo,
  evilIcons,
  feather,
  fontAwesome,
  fontAwesome5,
  foundation,
  ionicons,
  materialIcons,
  materialCommunityIcons,
  octicons,
  zocial,
  simpleLineIcons,
  fontisto,
  custom,
}

let IcoMoonIcon;

export const registerCustomIconType = (customIcon: {}) => {
  IcoMoonIcon = createIconSetFromIcoMoon(customIcon);

  // IcoMoonIcon = IcoMoonIconFont;
};

export const getIconType = (type: IconType) => {
  switch (type) {
    case IconType.antDesign:
      return AntDesign;
    case IconType.entypo:
      return Entypo;
    case IconType.evilIcons:
      return EvilIcons;
    case IconType.feather:
      return Feather;
    case IconType.fontAwesome:
      return FontAwesome;
    case IconType.fontAwesome5:
      return FontAwesome5;
    case IconType.foundation:
      return Foundation;
    case IconType.ionicons:
      return Ionicons;
    case IconType.materialIcons:
      return MaterialIcons;
    case IconType.materialCommunityIcons:
      return MaterialCommunityIcons;
    case IconType.octicons:
      return Octicons;
    case IconType.zocial:
      return Zocial;
    case IconType.simpleLineIcons:
      return SimpleLineIcons;
    case IconType.fontisto:
      return Fontisto;
    default:
      return IcoMoonIcon;
  }
};

export const getIconSizeScaleFix = (type: IconType) => {
  switch (type) {
    case IconType.antDesign:
      return 0.9;
    case IconType.entypo:
      return 1;
    case IconType.evilIcons:
      return 1.3;
    case IconType.feather:
      return 0.95;
    case IconType.fontAwesome:
      return 1.1;
    case IconType.fontAwesome5:
      return 1.1;
    case IconType.foundation:
      return 1.1;
    case IconType.ionicons:
      return 1;
    case IconType.materialIcons:
      return 1.05;
    case IconType.materialCommunityIcons:
      return 1;
    case IconType.octicons:
      return 0.9;
    case IconType.zocial:
      return 0.8;
    case IconType.simpleLineIcons:
      return 1.1;
    default:
      return 1;
  }
};
