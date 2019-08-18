import * as React from 'react';
import * as L from './styles';

const Header: React.FC = () => {
  return (
    <L.Header>
      <div>
        <L.Logo>hP</L.Logo>
      </div>
      <L.Nav>
        <L.NavA href="#contact">Contact</L.NavA>
        <L.NavA href="/blog">Blog</L.NavA>
        <L.NavA href="#about">About</L.NavA>
        <L.NavA href="/resume">Resume</L.NavA>
      </L.Nav>
      <L.MenuButton>Menu</L.MenuButton>
    </L.Header>
  );
};

export default Header;
