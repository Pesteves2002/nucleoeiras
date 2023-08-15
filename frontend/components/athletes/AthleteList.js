import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import AthleteSummary from '~/components/athletes/AthleteSummary';

const AthleteList = ({ athletes }) => {
  return (
    <Paper variant='outlined' sx={{ p: 2, mx: 3 }}>
      <Typography gutterBottom variant='h2'>
        Athletes
      </Typography>
      <Grid container spacing={2}>
        {athletes.map((athlete) => (
          <Grid item key={athlete.slug} xs={12} sm={6} md={4} lg={3} xl={2}>
            <AthleteSummary athlete={athlete} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default AthleteList;
