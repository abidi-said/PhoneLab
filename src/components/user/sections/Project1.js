import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import img1 from '../../../img/talent3.jpg';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    height: 424,
    margin: 'auto',
    marginBottom: 40,
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background:
      'linear-gradient(89.97deg, #1F3F68 3.62%, rgba(31, 63, 104, 0.37) 97.78%)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function Project1() {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost}>
      {/* {<img style={{ display: 'none' }} src={img1} alt='project 1' />} */}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component='h1'
              variant='h4'
              color='inherit'
              gutterBottom
            >
              PhoneLab Project n1
            </Typography>
            <Typography variant='h6' color='inherit' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Link variant='subtitle1' href='#' style={{ color: '#ff6e49' }}>
              Read More
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
