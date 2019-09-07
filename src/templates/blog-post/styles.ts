import styled from 'styled-components';
import { rem } from 'polished';
import media from '@utils/media';

export const Container = styled.article`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  max-width: 1080px;
  margin: 0 auto;
  padding: 3vw;
  text-align: center;
  .post__meta {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    .date {
      text-transform: uppercase;
      color: ${p => p.theme.colors.blue[600]};
    }
    .divider {
      margin: 0 0.3rem;
    }
    .tag {
      text-transform: uppercase;
      color: ${p => p.theme.colors.blue[600]};
      text-decoration: none;
    }
  }
  h1 {
    font-size: ${rem('60px')};
    ${media.tablet`
    font-size: ${rem('36px')};
    `}
    color: ${p => p.theme.colors.gray[900]};
    margin: 0;
    font-weight: 500;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
`;

export const ArticleSection = styled.div`
  background: #fff;
  font-weight: 300;
  border-radius: 8px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.75),
    rgb(255, 255, 255) 7.9rem
  );
  box-shadow: rgba(0, 0, 0, 0.34) 0px 2px 2px;
  max-width: 70rem;
  margin: 0 auto;
  margin: -10rem auto 2rem;
  padding: 2.5rem;
  iframe {
    min-height: 500px;
    ${media.thone`
    min-height: 375px;
    `}
  }
  font-size: ${rem('22px')};
  line-height: 2.2rem;
  ${media.thone`
   padding: 1rem;
    margin: 0 auto 2rem;
   `}
  a:not(.anchor) {
    color: inherit;
    text-decoration-color: ${p => p.theme.colors.blue[600]};
    transition: all 0.2s ease-in-out;
    :hover {
      background: ${p => p.theme.colors.blue[400]};
    }
  }
  a.anchor {
    color: inherit;
    fill: #a0aec0;
    text-decoration: none;
    border-bottom: none;
    box-shadow: none;
  }
  a.anchor:hover {
    background: none;
  }
`;
