import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from '~/components/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Box sx={{ m: 3 }}>{children}</Box>
    </div>
  );
};

export default Layout;
