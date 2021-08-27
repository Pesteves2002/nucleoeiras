import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

const ArticleSummary = ({ article }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        {article.image && (
          <CardMedia
            component='img'
            image={`${process.env.imageBaseUrl}${article.image?.url}`}
            alt={article.title}
          />
        )}
        <CardContent>
          <Typography variant='caption' color='text.secondary'>
            {new Date(article.created_at).toLocaleString('pt-PT')}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            {article.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleSummary;
