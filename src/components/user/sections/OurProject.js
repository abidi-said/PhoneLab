import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',

      margin: 'auto',
    },
  },
  TypographyGrid: {
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  centeralize: {
    alignContent: 'center',
    [theme.breakpoints.down('md')]: {
      alignContent: 'center',
    },
  },
}));

export default function OurProject() {
  const classes = useStyles();

  return (
    <div style={{ marginBottom: 100 }}>
      <Container>
        <Grid>
          <Grid
            container
            classNaem={classes.TypographyGrid}
            sapcing={10}
            style={{ paddingBottom: 100 }}
          >
            <Grid item md={3}>
              <Typography
                component='h3'
                variant='h4'
                style={{ color: '#1F3F68', fontWeight: 500 }}
              >
                Our Finished Project
              </Typography>
            </Grid>
            <Grid item md={5}>
              <Typography
                component='p'
                variant='body1'
                style={{
                  color: '#1F3F68',
                  opacity: 0.6,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Typography>
            </Grid>
          </Grid>
          <Project1 />
          <Grid container className={classes.container}>
            <Grid item>
              <Project2 />
            </Grid>
            <Grid item>
              <Project3 />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
