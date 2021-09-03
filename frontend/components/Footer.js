import { Container, Link, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';
import HeartIcon from '@material-ui/icons/FavoriteRounded';

const Footer = () => {
  return (
    <Box
      component='footer'
      textAlign='center'
      bgcolor='secondary.main'
      color='secondary.contrastText'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container fixed sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Typography variant='body1'>
          Designed with <HeartIcon color='primary' sx={{ verticalAlign: 'bottom' }} /> by{' '}
          <Link href='https://diogotc.com' target='_blank' rel='noopener' underline='hover'>
            Diogo Correia
          </Link>
        </Typography>
        <Typography variant='body2'>
          Copyright &copy; NucleOeiras {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
