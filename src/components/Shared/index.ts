import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.div`
  padding: 3rem 6rem;
  position: relative;
`;

export interface ICenteredHeader {
  color?: string;
  fontSize?: string;
}

export const CenteredHeader = styled.h1<ICenteredHeader>`
  text-align: center;
  & > h1 {
    font-size: ${p => p.fontSize || rem('36px')};
    color: ${p => p.color || p.theme.colors.gray[900]};
    font-weight: 400;
    margin: 0;
  }
  margin-bottom: 2rem;
`;
