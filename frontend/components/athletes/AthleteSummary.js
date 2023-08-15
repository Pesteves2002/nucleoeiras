import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

const AthleteSummary = ({ athlete }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <Link href={`/athlete/${athlete.slug}`} passHref>
        <CardActionArea
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
          component='a'
        >
          {athlete.image && (
            <CardMedia
              component='img'
              image={`${process.env.imageBaseUrl}${athlete.image?.url}`}
              alt={athlete.name}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {athlete.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default AthleteSummary;
