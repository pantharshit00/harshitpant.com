import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.article`
  display: grid;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  padding-bottom: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
`;

export const Header = styled.header`
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: ${rem('36px')};
    font-weight: 500;
    transition: all 0.1s ease-out;
    :hover {
      opacity: 0.6;
    }
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
    font-size: ${rem('18px')};
    line-height: ${rem('28px')};
    color: ${p => p.theme.colors.gray[700]};
  }
`;
