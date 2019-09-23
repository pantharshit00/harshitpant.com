import * as React from 'react';
import useWindowSize from '@rooks/use-window-size';
import { useSpring, animated } from 'react-spring';

const Bezier: React.FC = props => {
  const { innerWidth } = useWindowSize();

  const animation = useSpring({
    from: {
      x: 1562.536865234375, // this value is specific for the svg that I am using
    },
    x: 0,
    config: {
      tension: 100,
      friction: 120,
      mass: 1,
    },
  });
  return (
    <animated.svg
      strokeDashoffset={animation.x}
      strokeDasharray={1562.536865234375}
      width={innerWidth || 0}
      height={254.702}
      viewBox={`0 0 ${innerWidth || 0} 258`}
      fill="none"
      {...props}
    >
      <path
        d="M1461.01 132.204C1754.64 -32.175 1846.23 -51.6991 2184.76 128.582C2523.28 308.863 2716.34 282.83 2919 133"
        stroke="#9AE6B4"
      />
      <path
        d="M1461 132C1819.83 54.1988 1827.69 58.1123 2190.5 132.5C2553.31 206.888 2628.4 206.025 2919 133"
        stroke="#9AE6B4"
      />
      <path
        d="M1460 133C1795.58 2.9438 1866.42 23.4743 2188.8 132.487C2511.18 241.499 2688 222.5 2919 133"
        stroke="#276749"
        strokeWidth="3"
      />
      <path
        d="M2915.01 134.204C3208.84 -30.175 3300.5 -49.6991 3639.25 130.582C3978.01 310.863 4171.2 284.83 4374 135"
        stroke="#9AE6B4"
      />
      <path
        d="M2915 134C3274.07 56.1988 3281.94 60.1123 3645 134.5C4008.06 208.888 4083.2 208.025 4374 135"
        stroke="#9AE6B4"
      />
      <path
        d="M2914 135C3249.81 4.9438 3320.7 25.4743 3643.3 134.487C3965.9 243.499 4142.84 224.5 4374 135"
        stroke="#276749"
        strokeWidth="3"
      />
      <path
        d="M4375.01 134.204C4668.84 -30.175 4760.5 -49.6991 5099.25 130.582C5438.01 310.863 5631.2 284.83 5834 135"
        stroke="#9AE6B4"
      />
      <path
        d="M4375 134C4734.07 56.1988 4741.94 60.1123 5105 134.5C5468.06 208.888 5543.2 208.025 5834 135"
        stroke="#9AE6B4"
      />
      <path
        d="M4374 135C4709.81 4.9438 4780.7 25.4743 5103.3 134.487C5425.9 243.499 5602.84 224.5 5834 135"
        stroke="#276749"
        strokeWidth="3"
      />
      <path
        d="M2.0094 132.204C295.64 -32.175 387.235 -51.6991 725.758 128.582C1064.28 308.863 1257.34 282.83 1460 133"
        stroke="#9AE6B4"
      />
      <path
        d="M2 132C360.826 54.1988 368.691 58.1123 731.5 132.5C1094.31 206.888 1169.4 206.025 1460 133"
        stroke="#9AE6B4"
      />
      <path
        d="M1 133C336.578 2.9438 407.419 23.4743 729.799 132.487C1052.18 241.499 1229 222.5 1460 133"
        stroke="#276749"
        strokeWidth="3"
      />
    </animated.svg>
  );
};

export default Bezier;
