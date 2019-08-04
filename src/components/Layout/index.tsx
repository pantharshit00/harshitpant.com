import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import 'typeface-rubik';
import '../../fonts/victor-mono/index.css';

import Header from '../Header';
import theme from '../../utils/theme';

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
};

export default Layout;
