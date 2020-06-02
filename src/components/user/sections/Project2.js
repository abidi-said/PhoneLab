import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import img2 from '../../../img/talent4.jpg';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${img2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: 570,
    height: 417,
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      justifyContent: 'center',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background:
      'linear-gradient(309.18deg, rgba(66, 165, 245, 0.4) -1.71%, rgba(21, 101, 192, 0.6) 74.54%)',
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

export default function Preject2() {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost}>
      {/* {<img style={{ display: 'none' }} src={img1} alt='project 1' />} */}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={8}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component='h1'
              variant='h5'
              color='inherit'
              gutterBottom
            >
              PhoneLab Project n1
            </Typography>
            <Typography variant='subtitle1' color='inherit' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </Typography>
            <Link variant='caption' href='#' style={{ color: '#ff6e49' }}>
              Read More
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
