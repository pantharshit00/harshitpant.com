import styled from 'styled-components';
import { Container as BaseContainer } from '@components/Shared';
import { rem } from 'polished';

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 5rem;
  margin: 0 auto;
  max-width: 1330px;
`;

export const Container = styled(BaseContainer)`
  padding-bottom: 10rem;
`;

const chevronSvg = `data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0V0ZM1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8ZM10.032 8.56L7.2 11.4L6.072 10.272L8.32 8L6.08 5.736L7.2 4.608L10.592 8L10.032 8.56Z' fill='%23276749'/%3E%3C/svg%3E%0A`;

export const CoderTextSection = styled.div`
  display: flex;
  flex-direction: column;
  p#brief_desc {
    margin-top: 1rem;
    font-size: ${rem('20px')};
    line-height: ${rem('30px')};
    font-weight: normal;
    color: ${p => p.theme.colors.gray[800]};
  }
  p#iuse_desc {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    font-weight: normal;
    color: ${p => p.theme.colors.gray[700]};
    font-size: ${rem('20px')};
  }
  ul {
    display: grid;
    margin-left: 0.75rem;
    list-style: none;
    grid-template-columns: minmax(120px, 180px) minmax(120px, 180px);
    li {
      font-size: ${rem('18px')};
      color: ${p => p.theme.colors.gray[700]};
      :before {
        content: '';
        height: ${rem('18px')};
        width: ${rem('18px')};
        background-image: url("${chevronSvg}");
        background-size: contain;
        background-repeat: no-repeat;
        padding-left: 2em;
      }
    }
  }
`;
