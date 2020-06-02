import React from 'react';
import { Grid, Typography, Button, Link } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    sectionContainer: {
      borderTopRightRadius: 80,
      marginRight: 20,
      background: '#316099',
      [theme.breakpoints.up('md')]: {
        borderTopRightRadius: 200,
        marginRight: 100,
      },
    },
    contactText: {},
    contactContainer: {
      justifyContent: 'space-around',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        margin: 'auto',
      },
    },
    logo: {
      flexGrow: 1,
      display: 'inline-flex',
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  })
);

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='!#'>
        PhoneLab
      </Link>{' '}
      {new Date().getFullYear()}
      {'. All rights reserved.'}
    </Typography>
  );
};

const Footer = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.sectionContainer}
      style={
        {
          // height: '100vh',
        }
      }
    >
      {/* <Container> */}
      <Grid justify='center'>
        <Grid container className={classes.contactContainer}>
          <Grid item md={4} sm={10} xs={10} style={{ marginTop: 100 }}>
            <Typography
              component='h3'
              variant='h4'
              style={{ color: 'white', marginBottom: 35 }}
            >
              Intersted to work with our team?
            </Typography>
            <Typography
              component='p'
              variant='body2'
              style={{ color: '#FFFFFF', opacity: 0.6 }}
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: 100 }}>
            <Button
              style={{
                color: 'white',
                background: '#5A98D0',
                borderRadius: '3px',
                width: 220,
              }}
            >
              Let's Talk
            </Button>
          </Grid>
        </Grid>
        <div
          style={{
            marginRight: 100,
            opacity: 0.4,
            border: '1px solid #FFFFFF',
            marginTop: 100,
          }}
        />

        <Grid container justify='space-around' style={{ marginTop: 100 }}>
          <Grid item style={{ marginBottom: 70 }}>
            <Typography
              component='h3'
              variant='h5'
              style={{ color: 'white', margin: 7, marginBottom: 20 }}
            >
              PhoneLab
            </Typography>

            <Typography
              variant='subtitle2'
              style={{ color: 'white', margin: 7, opacity: 0.8 }}
            >
              phone repair services
            </Typography>
            <Typography
              variant='subtitle2'
              style={{ color: 'white', margin: 7, opacity: 0.8 }}
            >
              +216 26 174 483
            </Typography>
            <Typography
              m={5}
              variant='subtitle2'
              style={{ color: 'white', margin: 7, opacity: 0.8 }}
            >
              thedynamicboy@gmail.com
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: 70 }}>
            <Typography
              component='h3'
              variant='h6'
              style={{ color: 'white', marginBottom: 20 }}
            >
              Useful links
            </Typography>
            <Typography
              variant='subtitle2'
              style={{ color: 'white', margin: 7, opacity: 0.8 }}
            >
              Our Services
            </Typography>
            <Typography
              variant='subtitle2'
              style={{ color: 'white', margin: 7, opacity: 0.8 }}
            >
              About Us
            </Typography>
            <Typography
              variant='subtitle2'
              style={{ color: 'white', margin: 7, opacity: 0.8 }}
            >
              Contact
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: 70 }}>
            <Typography
              component='h3'
              variant='h6'
              style={{ color: 'white', marginBottom: 20 }}
            >
              Follow Us
            </Typography>
            <Typography
              variant='subtitle2'
              style={{ color: 'white', margin: 7, opacity: 0.8 }}
            >
              facebook
            </Typography>
            <Typography
              variant='subtitle2'
              style={{ color: 'white', margin: 7, opacity: 0.8 }}
            >
              twitter
            </Typography>
            <Typography
              variant='subtitle2'
              style={{ color: 'white', margin: 7, opacity: 0.8 }}
            >
              Google+
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
};

export default Footer;
