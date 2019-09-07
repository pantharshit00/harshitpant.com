import styled from 'styled-components';
import { Container as BaseContainer } from '@components/Shared';
import { rem } from 'polished';
import media from '@utils/media';

export const Container = styled(BaseContainer)`
  background: ${p => p.theme.colors.green[800]};
`;

export const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1330px;
  color: ${p => p.theme.colors.gray[100]};
  grid-template-columns: 1fr 1fr;
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    row-gap: 2rem;
  `}
`;

export const LogoSection = styled.div`
  h3 {
    font-family: ${p => p.theme.monoFontFamily};
    font-size: ${rem('36px')};
    font-weight: 500;
    margin: 1rem;
    margin-bottom: 0.5rem;
  }
  .logosection__logos {
    padding: 0.5rem;
    a {
      color: inherit;
      cursor: pointer;
    }
    svg {
      height: 30px;
      width: 30px;
    }
  }
`;

export const LinksSection = styled.div`
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  .linksection__container {
    h4 {
      margin-bottom: 0.75rem;
      color: ${p => p.theme.colors.gray[400]};
    }
    ul {
      list-style: none;
      margin: 0;
      li {
        font-size: ${rem('18px')};
        font-weight: 400;
        a {
          color: inherit;
          text-decoration: none;
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  ${media.tablet`
  justify-self: auto;
   grid-template-columns:  1fr 1fr;
   /* grid-template-rows: 1fr; */
   margin-left: 1rem;
  `}
`;

export const CreditsSection = styled.div`
  background: ${p => p.theme.colors.green[900]};
  color: ${p => p.theme.colors.gray[100]};
  padding: 0.5rem 3rem;
  .credits__grid {
    margin: 0 auto;
    max-width: 1330px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    ${media.tablet`
  grid-template-columns: 1fr;
  row-gap: 1.5rem;
  `}
  }
  .credits__techs {
    display: flex;
    ${media.tablet`
    margin-top: 1rem;
    justify-self: center;
  `}
    ${media.thone`
   flex-direction: column;
   align-items: center;
  `}
    > div {
      margin-right: 1.2rem;
      a {
        color: inherit;
        cursor: pointer;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.1s ease;
        &:hover,
        &:focus,
        &:active {
          text-decoration: underline;
        }
      }
    }
  }
  .credits__cpright {
    ${media.phablet`
   margin-bottom: 1rem;
  `}
    a {
      color: inherit;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.1s ease;
      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;
      }
    }
    justify-self: end;
    ${media.tablet`
    justify-self: center;
  `}
  }
`;
