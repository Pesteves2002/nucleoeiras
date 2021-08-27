import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import ArticleSummary from '~/components/articles/ArticleSummary';

const ArticleList = ({ articles }) => {
  return (
    <Paper variant='outlined' sx={{ p: 2 }}>
      <Typography gutterBottom variant='h2'>
        Notícias
      </Typography>
      <Grid container spacing={2}>
        {articles.map((article) => (
          <Grid item key={article.slug} xs={12} sm={6} md={4} lg={3} xl={2}>
            <ArticleSummary article={article} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ArticleList;
