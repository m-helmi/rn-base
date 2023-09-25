import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconProps} from 'react-native-vector-icons/Icon';
import {getIconType, IconType, Lang} from '@src/utils';
import {useCurrentLangSelector, useTheme} from '@src/slices';
import {SvgXml} from 'react-native-svg';
export interface Props extends IconProps {
  type?: IconType;
  flip?: Boolean;
  forceFlip?: Boolean;
  svg?: any;
}

export const AppIcon: React.FC<Props> = props => {
  const {type, color, svg, flip = true, forceFlip, style, ...rest} = props;
  const VectorIcon = getIconType(type || IconType.custom) as typeof AntDesign;
  const {
    colors: {iconColor},
  } = useTheme();
  const rtl = useCurrentLangSelector() === Lang.ar;
  const flipDirectionStyles = flip && rtl ? {transform: [{scaleX: -1}]} : {};
  const forceFlipDirectionStyles = forceFlip ? {transform: [{scaleX: -1}]} : {};
  if (svg) {
    return <SvgXml xml={svg} style={style} />;
  }
  return (
    <VectorIcon
      color={color || iconColor}
      style={[style, flipDirectionStyles, forceFlipDirectionStyles]}
      {...rest}
    />
  );
};
