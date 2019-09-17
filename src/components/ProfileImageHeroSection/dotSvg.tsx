import * as React from 'react';
import { useTransition, animated } from 'react-spring';

type Circles = Array<{ cx: number; cy: number; key: string }>;

const side = 8;
const circles: Circles = [];
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
  const [c, set] = React.useState<Circles>([]);
  const transitions = useTransition(c, i => i.key, {
    from: { opacity: 0, r: '0px' },
    enter: { opacity: 1, r: '2px' },
    trail: 20,
    config: {
      velocity: 10,
      tension: 100,
      friction: 10,
      mass: 1,
    },
  } as any);
  React.useEffect(() => {
    set(circles);
  }, []);
  return (
    <svg width={144} height={137} viewBox="0 0 116 137" fill="none" {...p}>
      {transitions.map(({ item, props, key }) => (
        <animated.circle
          key={key}
          style={props}
          fill="#68D391"
          cx={item.cx}
          cy={item.cy}
        />
      ))}
    </svg>
  );
};

export default DotSvg;
