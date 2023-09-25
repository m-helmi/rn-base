import React from 'react';

import Svg, {G, Path} from 'react-native-svg';

export const SvgHome = props => (
  <Svg width={22} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M13.09 2.557c-1.439-1.008-3.648-.953-5.032.12L3.465 6.26c-.916.715-1.64 2.181-1.64 3.336v6.325a4.245 4.245 0 0 0 4.234 4.245h9.882a4.237 4.237 0 0 0 4.235-4.235V9.717c0-1.238-.797-2.76-1.806-3.465l-5.28-3.695zM11 17.187a.693.693 0 0 1-.687-.687v-2.75c0-.376.311-.688.687-.688.376 0 .688.312.688.688v2.75a.693.693 0 0 1-.688.687z"
      fill={props.fill ?? '#7E93A5'}
      fillRule="evenodd"
    />
  </Svg>
);
