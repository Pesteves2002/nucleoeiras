import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from '~/components/Navbar';

const Layout = ({ backUrl, transparentNavbar, children }) => {
  return (
    <div>
      <Navbar backUrl={backUrl} transparentNavbar={transparentNavbar} />
      <Box my={3}>{children}</Box>
    </div>
  );
};

export default Layout;
