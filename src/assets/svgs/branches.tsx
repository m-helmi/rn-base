import React from 'react';

import Svg, {G, Path} from 'react-native-svg';

export const SvgBranches = props => (
  <Svg width={22} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M11 1.604h-.01c-3.235 0-6.938 1.898-7.9 6.133-1.073 4.73 1.823 8.735 4.445 11.256A4.983 4.983 0 0 0 11 20.396a4.945 4.945 0 0 0 3.456-1.403c2.622-2.52 5.518-6.517 4.446-11.247C17.939 3.51 14.245 1.604 11 1.604zM8.113 9.451a2.887 2.887 0 1 1 5.774 0 2.887 2.887 0 0 1-5.774 0z"
      fill={props.fill ?? '#7E93A5'}
      fillRule="evenodd"
    />
  </Svg>
);
