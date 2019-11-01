import { useSpring, config } from 'react-spring';

export const useSlideLeft = () =>
  useSpring({
    from: { transform: 'translateX(-200px)', opacity: 0 },
    transform: 'translateX(0px)',
    opacity: 1,
    config: config.molasses,
  });

export const useSlideTop = () =>
  useSpring({
    from: { transform: 'translateY(-200px)', opacity: 0 },
    transform: 'translateY(0px)',
    opacity: 1,
    config: config.molasses,
  });
