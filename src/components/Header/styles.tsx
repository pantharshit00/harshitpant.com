import styled from 'styled-components';
import { rem, rgba } from 'polished';
import media from '@utils/media';
import Button from '../Button';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1550px;
`;

export const Header = styled.header`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  padding: ${rem('15px')} 5rem;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  ${media.tablet`
    padding: ${rem('15px')} 1rem;
  `}
`;

export const Logo = styled.h1`
  font-family: 'Victor Mono', Rubik, sans-serif;
  font-weight: 600;
  font-size: ${rem('28px')};
  margin: 0;
  color: ${p => p.theme.colors.gray[700]};
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Nav = styled.nav<{ open: boolean }>`
  display: flex;
  .close__button {
    display: none;
  }
  ${media.tablet`
      display: ${(p: any) => (p.open ? 'flex' : 'none')};
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 20;
      background: ${(p: any) => rgba(p.theme.colors.gray[900], 0.8)};
      justify-content: center;
      align-items: center;
      > div {
        display: flex;
        flex-direction: column;
        background: white;
        width: 80%;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14),
          0px 2px 4px rgba(0, 0, 0, 0.2);
          .close__button {
           display: block;
            button {
              float: right;
              background: none;
              outline: none;
              cursor: pointer;
              border: none;
            }
          }
      }
    `}
`;

export const NavA = styled.a`
  font-family: ${p => p.theme.monoFontFamily};
  font-size: ${rem('20px')};
  font-weight: 500;
  margin-left: 1rem;
  margin-right: 1rem;
  color: ${p => p.theme.colors.gray[700]};
  text-decoration: none;
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media all and (min-width: 768px) {
    &:hover,
    &:focus,
    &:active {
      border-bottom: 1px solid ${p => p.theme.colors.green[800]};
      box-shadow: inset 0 -1.75px 0px 0px ${p => p.theme.colors.green[800]};
    }
  }
  ${media.tablet`
     margin: 1rem;
     font-size: ${rem('26px')};
    `}
`;

export const MenuButton = styled(Button)`
  font-size: ${rem('18px')};
  background: ${p => p.theme.colors.gray[200]};
  color: ${p => p.theme.colors.gray[800]};
  display: none;
  ${media.tablet`
  display: inline;
    `}
`;
