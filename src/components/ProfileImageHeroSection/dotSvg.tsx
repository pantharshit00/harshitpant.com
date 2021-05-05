import * as React from 'react';
import { useTransition, animated, config } from 'react-spring';

type Circle = { cx: number; cy: number; key: string };

const side = 8;
const circles: Circle[] = [];
for (let row = 0; row < side; row += 1) {
  for (let col = 0; col <= row; col += 1) {
    circles.push({
      cx: 2 + col * 18,
      cy: 2 + row * 16,
      key: `dotsvg-${row}-${col}`,
    });
  }
}

const DotSvg: React.FC = p => {
  const transition = useTransition(circles, {
    from: { opacity: 0, r: '0px' },
    enter: { opacity: 1, r: '2px' },
    trail: 20,
    config: config.stiff,
    expires: false,
    keys: (i: Circle) => i.key,
  });
  const points = transition((style, item) => (
    <animated.circle
      style={style as any}
      fill="#68D391"
      cx={item.cx}
      cy={item.cy}
    />
  ));
  return (
    <svg width={144} height={137} viewBox="0 0 116 137" fill="none" {...p}>
      {points}
    </svg>
  );
};

export default DotSvg;
