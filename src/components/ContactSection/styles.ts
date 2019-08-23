import styled from 'styled-components';
import { rem } from 'polished';
import { Container as BaseContainer } from '@components/Shared';
import media from '@utils/media';

export const Container = styled(BaseContainer)`
  padding-bottom: 7rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr;
  grid-gap: 3rem;
  ${media.desktop`
    display: flex;
    flex-direction: column;
  `}
`;

export const ContactFormSection = styled.div`
  display: flex;
  flex-direction: column;
  .contact__form--heading {
    font-size: ${rem('34px')};
    font-weight: 400;
    margin-bottom: 3.5rem;
  }
  ${media.desktop`
   order: 2;
   margin-top: 4rem;
   margin-bottom: 5rem; 
   display: flex;
   align-items: center;
  `}
`;

export const TwitterDMSection = styled.div`
  font-size: ${rem('22px')};
  font-weight: 300;
  margin-top: 6rem;
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.gray[900]};
  span a {
    color: ${p => p.theme.colors.gray[900]};
    text-decoration: none;
    border-bottom: 1px solid #38a1f3;
    box-shadow: inset 0 -1px 0px 0px #38a1f3;
  }
  > a {
    height: 40px;
    width: 40px;
    svg {
      height: 100%;
      width: 100%;
    }
  }
  svg {
    fill: #38a1f3;
    height: 40px;
    width: 40px;
    margin-left: 0.5rem;
  }
`;
