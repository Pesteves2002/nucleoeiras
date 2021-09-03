import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';

const Hero = () => {
  return (
    <Box
      minHeight='50vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      position='relative'
      mt={-3}
      mb={3}
      sx={{
        background:
          'no-repeat center/cover url("data:image/svg+xml,%3Csvg%20width%3D%22900%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cfilter%20id%3D%22a%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%22161%22%20result%3D%22effect1_foregroundBlur%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cpath%20fill%3D%22%23f55200%22%20d%3D%22M0%200h900v600H0z%22%2F%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Ccircle%20cx%3D%2273%22%20cy%3D%22579%22%20fill%3D%22%23f57c00%22%20r%3D%22357%22%2F%3E%3Ccircle%20cx%3D%22607%22%20cy%3D%22400%22%20fill%3D%22%23f55200%22%20r%3D%22357%22%2F%3E%3Ccircle%20cx%3D%22354%22%20cy%3D%2276%22%20fill%3D%22%23f57c00%22%20r%3D%22357%22%2F%3E%3Ccircle%20cx%3D%22203%22%20cy%3D%22230%22%20fill%3D%22%23f57c00%22%20r%3D%22357%22%2F%3E%3Ccircle%20cx%3D%22339%22%20cy%3D%22399%22%20fill%3D%22%23f55200%22%20r%3D%22357%22%2F%3E%3Ccircle%20cx%3D%22725%22%20cy%3D%2246%22%20fill%3D%22%23f57c00%22%20r%3D%22357%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
      }}
    >
      <Typography variant='h1'>NucleOeiras</Typography>

      <Box
        position='absolute'
        bottom={0}
        left={0}
        width='100%'
        overflow='hidden'
        lineHeight={0}
        sx={{ transform: 'rotate(180deg)' }}
      >
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          style={{
            position: 'relative',
            display: 'block',
            width: 'calc(100% + 1.3px)',
            height: 100,
          }}
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            fill='#fff'
          ></path>
        </svg>
      </Box>
    </Box>
  );
};

export default Hero;
