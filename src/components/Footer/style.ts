import styled from 'styled-components';
import { Container as BaseContainer } from '@components/Shared';
import { rem } from 'polished';

export const Container = styled(BaseContainer)`
  background: ${p => p.theme.colors.green[800]};
`;

export const Grid = styled.div`
  display: grid;
  color: ${p => p.theme.colors.gray[100]};
  grid-template-columns: 1fr 1fr;
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
      }
    }
  }
`;

export const CreditsSection = styled.div`
  background: ${p => p.theme.colors.green[900]};
  color: ${p => p.theme.colors.gray[100]};
  padding: 0.5rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .credits__techs {
    display: flex;
    > div {
      margin-right: 1.2rem;
    }
  }
  .credits__cpright {
    justify-self: end;
  }
  .spacer {
    flex: 1;
  }
`;
