import styled from 'styled-components';
import { rem } from 'polished';
import media from '@utils/media';
import Button from '../Button';

export const Header = styled.header`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  padding: ${rem('15px')} 5rem;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
`;

export const Logo = styled.h1`
  font-family: 'Victor Mono', Rubik, sans-serif;
  font-weight: 600;
  font-size: ${rem('28px')};
  margin-bottom: 0;
  color: ${p => p.theme.colors.gray[700]};
`;

export const Nav = styled.nav`
  display: flex;
  ${media.tablet`
  display: none;
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
  &:hover,
  &:focus,
  &:active {
    border-bottom: 1px solid ${p => p.theme.colors.green[800]};
    box-shadow: inset 0 -1.75px 0px 0px ${p => p.theme.colors.green[800]};
  }
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
