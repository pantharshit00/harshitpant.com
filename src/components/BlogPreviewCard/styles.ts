import styled from 'styled-components';
import { rem } from 'polished';
import media from '@utils/media';

export const Container = styled.article`
  display: grid;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  padding-bottom: 3rem;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 4rem;
  ${media.desktop`
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
  `}
  ${media.phablet`
  grid-template-columns: 65% 1fr;
  column-gap: 0.25rem;
  `}
`;

export const Header = styled.header`
  justify-content: center;
  display: flex;
  flex-direction: column;
  h2 {
    margin-top: 0;
    font-size: ${rem('36px')};
    ${media.bigDesktop`
      font-size: ${rem('28px')};
    `}
    ${media.desktop`
      font-size: ${rem('26px')};
    `}
     ${media.phablet`
      font-size: ${rem('20px')};
    `}
    font-weight: 600;
    a {
      text-decoration: none;
      color: ${p => p.theme.colors.gray[900]};
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${rem('18px')};
  ${media.bigDesktop`
      font-size: ${rem('16px')};
    `}
  .tag__container--read {
    margin-right: 1rem;
    color: ${p => p.theme.colors.gray[600]};
  }
  .tag__container--tags {
    a {
      font-family: ${p => p.theme.monoFontFamily};
      display: inline-block;
      text-decoration: none;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      font-weight: 600;
      color: ${p => p.theme.colors.blue[600]};
      transition: all 0.1s ease-out;
      &:hover,
      &:focus {
        color: ${p => p.theme.colors.blue[800]};
      }
    }
  }
`;

export const ExcerptSection = styled.div`
  p {
    word-break: break-all;
    font-size: ${rem('18px')};
    line-height: ${rem('28px')};
    color: ${p => p.theme.colors.gray[700]};
    ${media.bigDesktop`
      font-size: ${rem('16px')};
    `}
  }
  ${media.desktop`
    display: none;
  `}
`;
