import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import img1 from '../../../img/phone.jpg';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
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
    marginLeft: 100,
  },
}));

export default function MainFeaturedPost() {
  const classes = useStyles();

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src={img1} alt='talent' />} */}
      <div className={classes.overlay} />

      <Grid justify='flex-start' spacing={2}>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component='h1'
              variant='h3'
              color='inherit'
              gutterBottom
            >
              About Us
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what's most interesting in this
              block contents.
            </Typography>
            <Link variant='subtitle1' href='#' style={{ color: '#ff6e49' }}>
              Learn More
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
