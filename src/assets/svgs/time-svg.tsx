import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

export const SvgTimeDate = props => (
  <Svg width={17} height={17} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      transform="translate(1 1)"
      stroke="#C5C3CE"
      strokeWidth={1.305}
      fill="none"
      fillRule="evenodd">
      <Circle cx={7.5} cy={7.5} r={7.5} />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.892 3.243v4.865h3.243"
      />
    </G>
  </Svg>
);
