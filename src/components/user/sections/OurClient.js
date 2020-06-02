import React from 'react';
import {
  Grid,
  Container,
  Typography,
  Button,
  Avatar,
  Link,
  Divider,
  Box
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import logo from '../../../img/logo1.png';
import Footer from './Footer';

const useStyles = makeStyles(theme =>
  createStyles({
    sectionContainer: {
      borderTopLeftRadius: 80,

      background: '#5A98D0',

      [theme.breakpoints.up('md')]: {
        borderTopLeftRadius: 200
      }
    },
    clientContainer: {
      // paddingLeft: 30
      // [theme.breakpoints.up('md')]: {
      //   justifyContent: 'flex-start'
      // }
    },
    marg: {
      marginTop: 30,
      [theme.breakpoints.up('md')]: {
        marginTop: 100
      }
    },
    logo: {
      flexGrow: 1,
      display: 'inline-flex'
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3)
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6)
    },
    rowTop: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: 'rgb(229,229,229)',
      paddingTop: 20
    },
    rowBottom: {
      flexDirection: 'row',
      paddingBottom: 20
    },
    itemWhiteBox: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 15,
      marginRight: 15,
      // borderRadius: 8,
      // backgroundColor: '#FFFFFF',
      elevation: 6
    },
    hover: {
      '&:hover': {
        backgroundColor: '#316099'
      }
    },
    subjectMarj: {
      marginLeft: 200,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 100
      }
    },
    itemBoderLeft: {
      [theme.breakpoints.down('sm')]: {
        borderLeft: '1px solid'
      }
    }
  })
);

const OurClient = () => {
  const classes = useStyles();
  return (
    <div className={classes.sectionContainer}>
      <Container>
        <Grid
          direction='row'
          className={classes.clientContainer}
          container
          // spacing={2}
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 35
          }}
        >
          <Grid item md={3} className={classes.marg}>
            {/* <Container> */}
            <Typography component='h4' variant='h4' style={{ color: 'white' }}>
              Our Beloved Client
            </Typography>
          </Grid>
          <Grid item md={4} className={classes.marg}>
            <Typography
              component='p'
              variant='body2'
              style={{
                color: 'white',
                opacity: 0.6
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </Grid>
          <Grid></Grid>
          {/* </Container> */}
        </Grid>
      </Container>
      <Container>
        <div
          className={classes.subjectMarj}
          style={{
            marginTop: 100,
            marginBottom: 100,

            paddingRight: 50,
            paddingTop: 20
          }}
        >
          <Box display='flex' flexWrap='Wrap'>
            <Box
              className={classes.hover}
              color='white'
              borderColor='white'
              borderRight={1}
              borderBottom={1}
              p={5}
            >
              <Typography variant='subtitle1'>Item N1</Typography>
            </Box>
            <Box
              className={classes.hover}
              p={5}
              color='white'
              borderColor='white'
              borderRight={1}
              borderBottom={1}
            >
              <Typography variant='subtitle1'>Item N2</Typography>
            </Box>
            <Box
              className={[classes.hover, classes.itemBoderLeft]}
              p={5}
              color='white'
              borderColor='white'
              borderRight={1}
              borderBottom={1}
            >
              <Typography variant='subtitle1'>Item N3</Typography>
            </Box>
            <Box
              className={classes.hover}
              p={5}
              color='white'
              borderColor='white'
              borderBottom={1}
            >
              <Typography variant='subtitle1'>Item N4</Typography>
            </Box>
          </Box>

          <Box display='flex' flexWrap='wrap'>
            <Box
              className={classes.hover}
              color='white'
              borderColor='white'
              borderRight={1}
              borderTop={1}
              p={5}
            >
              <Typography variant='subtitle1'>Item N5</Typography>
            </Box>
            <Box
              className={classes.hover}
              p={5}
              color='white'
              borderColor='white'
              borderRight={1}
              borderTop={1}
            >
              <Typography variant='subtitle1'>Item N6</Typography>
            </Box>
            <Box
              className={[classes.hover, classes.itemBoderLeft]}
              p={5}
              color='white'
              borderColor='white'
              borderRight={1}
              borderTop={1}
            >
              <Typography variant='subtitle1'>Item N7</Typography>
            </Box>
            <Box
              className={classes.hover}
              p={5}
              color='white'
              borderColor='white'
              borderTop={1}
            >
              <Typography variant='subtitle1'>Item N8</Typography>
            </Box>
          </Box>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default OurClient;
