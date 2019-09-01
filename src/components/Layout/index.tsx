import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import 'typeface-rubik';
import '@fonts/victor-mono/index.css';
import '@utils/prism-theme.css';

import theme from '@utils/theme';
import Footer from '../Footer';
import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
