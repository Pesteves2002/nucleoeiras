import { AppBar, Box, IconButton, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import BackIcon from '@material-ui/icons/ArrowBackRounded';
import Link from 'next/link';
import React from 'react';
import InstagramIcon from '~/icons/InstagramIcon';

const Navbar = ({ backUrl, transparentNavbar }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 150,
  });

  const transparent = transparentNavbar && !trigger;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={transparent ? 0 : 4} color={(transparent && 'transparent') || undefined}>
        <Toolbar>
          {backUrl && (
            <Link href={backUrl} passHref>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='back'
                sx={{ mr: 2 }}
                component='a'
              >
                <BackIcon />
              </IconButton>
            </Link>
          )}
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
          <Link href='/athletes' passHref>
            Athletes
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
      {!transparentNavbar && <Toolbar />}
    </Box>
  );
};

export default Navbar;
