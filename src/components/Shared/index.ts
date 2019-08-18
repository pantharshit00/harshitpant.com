import styled from 'styled-components';
import { rem } from 'polished';
import media from '@utils/media';

export const Container = styled.div`
  padding: 3rem 6rem;
  position: relative;
  ${media.tablet`
    padding: 1rem;
  `}
`;

export interface ICenteredHeader {
  color?: string;
  fontSize?: string;
}

export const CenteredHeader = styled.div<ICenteredHeader>`
  text-align: center;
  & > h1 {
    font-size: ${p => p.fontSize || rem('36px')};
    color: ${p => p.color || p.theme.colors.gray[900]};
    font-weight: 400;
    margin: 0;
    ${media.tablet`
       font-size: ${(p: any) => p.fontSize || rem('30px')};
    `}
    ${media.phablet`
       font-size: ${(p: any) => p.fontSize || rem('26px')};
    `}
  }
  margin-bottom: 2rem;
`;

export const SVGSectionWrapper = styled.div`
  & > svg {
    height: 100%;
    width: 100%;
  }
`;
