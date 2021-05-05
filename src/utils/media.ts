import { css } from 'styled-components';

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

// iterate through the sizes and create a media template
export const media = Object.entries(sizes).reduce<
  { [key in keyof typeof sizes]?: any }
>((accumulator, [label, size]) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = size / 16;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  accumulator[label] = (first, ...interp) => css`
    @media (max-width: ${emSize}em) {
      ${css(first, ...interp)};
    }
  `;
  return accumulator;
}, {});

export default media;
