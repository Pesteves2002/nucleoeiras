import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';

const Layout = ({ backUrl, transparentNavbar, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <div>
        <Navbar backUrl={backUrl} transparentNavbar={transparentNavbar} />
        <Box my={3}>{children}</Box>
      </div>
      <Footer />
    </Box>
  );
};

export default Layout;
