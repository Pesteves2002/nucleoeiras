import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/MenuRounded';
import Link from 'next/link';
import React from 'react';
import InstagramIcon from '~/icons/InstagramIcon';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link href='/' passHref>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, color: 'text.primary', textDecoration: 'none' }}
              component='a'
            >
              NucleOeiras
            </Typography>
          </Link>
          <IconButton
            href={`https://www.instagram.com/${process.env.social.instagram}/`}
            target='_blank'
            rel='noopener noreferrer'
            size='large'
            color='inherit'
          >
            <InstagramIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
