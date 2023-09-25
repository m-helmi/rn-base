import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SvgArrowDown = props => (
  <Svg width={10} height={6} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m1.05.95 3.9 3.9 3.9-3.9"
      stroke="#304348"
      strokeWidth={1.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
