import * as React from 'react';
import { Link } from 'gatsby';
import * as L from './styles';

const Header: React.FC = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '1550px',
      }}
    >
      <L.Header>
        <div>
          <L.Logo>
            <Link to="/">hP</Link>
          </L.Logo>
        </div>
        <L.Nav>
          <L.NavA href="#contact">Contact</L.NavA>
          <L.NavA href="/blog">Blog</L.NavA>
          <L.NavA href="#about">About</L.NavA>
          <L.NavA href="/resume">Resume</L.NavA>
        </L.Nav>
        <L.MenuButton>Menu</L.MenuButton>
      </L.Header>
    </div>
  );
};

export default Header;
