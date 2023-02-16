import * as React from 'react';
import { Link } from 'gatsby';
import * as L from './styles';

const CloseIcon: React.FC = props => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-x-circle"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M15 9L9 15" />
    <path d="M9 9L15 15" />
  </svg>
);

const Header: React.FC = () => {
  const [open, setMenuOpen] = React.useState(false);

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <L.Container>
      <L.Header>
        <div>
          <L.Logo>
            <Link to="/">hP</Link>
          </L.Logo>
        </div>
        <L.Nav open={open}>
          <div>
            <div className="close__button">
              <button type="button" onClick={closeMenu}>
                <CloseIcon />
                <div className="sr-only">close button</div>
              </button>
            </div>
            <L.NavA onClick={closeMenu} href="/#contact">
              Contact
            </L.NavA>
            <L.NavA onClick={closeMenu} href="/#about">
              About
            </L.NavA>
          </div>
        </L.Nav>
        <L.MenuButton onClick={openMenu}>Menu</L.MenuButton>
      </L.Header>
    </L.Container>
  );
};

export default Header;
