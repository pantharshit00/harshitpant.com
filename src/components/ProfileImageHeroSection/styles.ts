import styled from 'styled-components';
import { rem } from 'polished';
import media from '@utils/media';
import { animated } from 'react-spring';
import DotSvg from './dotSvg';
import BaseButton from '../Button';
import bezier from './bezier';

export const Section = styled.div`
  display: grid;
  padding: 6rem 10rem 2rem 10rem;
  margin: 0 auto;
  max-width: 1330px;
  grid-template-columns: 300px 1fr;
  column-gap: 1.25rem;
  row-gap: 5rem;
  ${media.bigDesktop`
   padding: 4rem 8rem 1rem 8rem;
    `}
  ${media.desktop`
   grid-template-columns: 220px 1fr;
   padding: 4rem 6rem 1rem 6rem;
    `}
   ${media.tablet`
    display: flex;
    flex-direction: column;
      padding: 3rem;
   `} 
   ${media.phablet`
    display: flex;
    flex-direction: column;
      padding: 1.25rem;
   `} 
`;

export const DSvg = styled(DotSvg)`
  position: absolute;
  bottom: -8%;
  left: -22%;
  z-index: -1;
  ${media.tablet`
    top: 235px;
    left: calc(50% - 131px - 45px);
  `}
`;

export const ImageSection = styled.div`
  position: relative;
  > picture {
    height: 100%;
    ${media.tablet`
    width: 250px;
    `}
  }
  ${media.tablet`
  display: flex;
   justify-content: center;
   margin-bottom: 2rem;
   `}
`;

export const TextSection = styled.div`
  display: grid;
  padding: 3rem;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
`;

export const YellowH6 = styled(animated.h6)`
  font-family: ${p => p.theme.monoFontFamily};
  color: ${p => p.theme.colors.yellow[900]};
  margin: 0;
  font-weight: 600;
  font-size: ${rem('20px')};
  ${media.bigDesktop`
  font-size: ${rem('16px')};
    `}
`;

export const HeroH1 = styled(animated.h1)`
  font-family: ${p => p.theme.fontFamily};
  font-size: ${rem('72px')};
  margin: 0;
  font-weight: 500;
  margin-left: -3px;
  ${media.bigDesktop`
  font-size: ${rem('56px')};
    `}
  ${media.desktop`
   font-size: ${rem('48px')};
  `}
`;

export const HeroText = styled.h3`
  font-family: ${p => p.theme.fontFamily};
  color: ${p => p.theme.colors.gray[600]};
  font-size: ${rem('26px')};
  font-weight: 400;
  margin: 0;
  ${media.bigDesktop`
  font-size: ${rem('22px')};
    `}
  ${media.desktop`
   font-size: ${rem('20px')};
  `}
`;

// margin-left below is kind of a hack because the svg I am using start a bit from right
export const Bezier = styled(bezier)`
  margin-top: 3.5rem;
  margin-left: -20px;
`;

export const Button = styled(BaseButton)<{ href?: string }>`
  font-size: ${rem('24px')};
  text-decoration: none;
  padding: 0.5rem 1rem;
  ${media.bigDesktop`
  font-size: ${rem('20px')};
    `}
  ${media.desktop`
   font-size: ${rem('18px')};
  `}
`;
