import styled from 'styled-components';
import { rem } from 'polished';
import DotSvg from './dotSvg';

export const Section = styled.div`
  display: grid;
  padding: 8rem 10rem;
  grid-template-columns: 300px 1fr;
  column-gap: 1.25rem;
  row-gap: 5rem;
`;

export const DSvg = styled(DotSvg)`
  position: absolute;
  bottom: -8%;
  left: -15%;
  z-index: -1;
`;

export const ImageSection = styled.div`
  position: relative;
`;

export const TextSection = styled.div`
  display: grid;
  padding: 3rem;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

export const YellowH6 = styled.h6`
  font-family: ${p => p.theme.monoFontFamily};
  color: ${p => p.theme.colors.yellow[900]};
  margin: 0;
  font-weight: 600;
  font-size: ${rem('20px')};
`;

export const HeroH1 = styled.h1`
  font-family: ${p => p.theme.fontFamily};
  font-size: ${rem('72px')};
  margin: 0;
  font-weight: 500;
  margin-left: -3px;
`;

export const HeroText = styled.h3`
  font-family: ${p => p.theme.fontFamily};
  color: ${p => p.theme.colors.gray[600]};
  font-size: ${rem('26px')};
  font-weight: 400;
`;

const lineBezierSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2919.084' height='254.702' viewBox='0 0 2919.084 254.702'%3E%3Cg transform='translate(-230.458 -413.511)'%3E%3Cg transform='translate(230 413)'%3E%3Cpath d='M2.009,132.2C295.64-32.175,387.235-51.7,725.758,128.582S1257.34,282.83,1460,133' fill='none' stroke='%239ae6b4' stroke-width='1'/%3E%3Cpath d='M2,132c358.826-77.8,366.691-73.888,729.5.5s437.9,73.525,728.5.5' fill='none' stroke='%239ae6b4' stroke-width='1'/%3E%3Cpath d='M1,133C336.578,2.944,407.419,23.474,729.8,132.487S1229,222.5,1460,133' fill='none' stroke='%23276749' stroke-width='3'/%3E%3C/g%3E%3Cg transform='translate(1689 413)'%3E%3Cpath d='M2.009,132.2C295.64-32.175,387.235-51.7,725.758,128.582S1257.34,282.83,1460,133' fill='none' stroke='%239ae6b4' stroke-width='1'/%3E%3Cpath d='M2,132c358.826-77.8,366.691-73.888,729.5.5s437.9,73.525,728.5.5' fill='none' stroke='%239ae6b4' stroke-width='1'/%3E%3Cpath d='M1,133C336.578,2.944,407.419,23.474,729.8,132.487S1229,222.5,1460,133' fill='none' stroke='%23276749' stroke-width='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

export const Bezier = styled.div`
  background: url("${lineBezierSvg}");
  background-size: 2919.084px 254.702px;
  height: 254.702px;
  grid-column: span 2;
  margin-left: -10rem;
  margin-right: -10rem;
`;
