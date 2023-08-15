import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

// TODO: see this
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
              alt={athlete.title}
            />
          )}
          <CardContent>
            <Typography variant='caption' color='text.secondary'>
              {new Date(athlete.created_at).toLocaleString('pt-PT')}
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              {athlete.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {athlete.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default AthleteSummary;
