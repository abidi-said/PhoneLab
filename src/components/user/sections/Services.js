import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import service1 from '../../../img/1.png';
import service2 from '../../../img/2.png';
import service3 from '../../../img/3.png';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(20),
  },
  cardContainer: {},
  card: {
    height: 'auto',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      boxShadow: '5px 20px 50px rgba(16, 112, 177, 0.2)',
    },
    margin: 'auto',

    borderRadius: '10px',
  },
  marjBottom: {
    [theme.breakpoints.down('md')]: {
      marginBottom: 70,
    },
  },
  rightDownCard: {
    [theme.breakpoints.up('md')]: {
      marginTop: 70,
    },
  },
  cardMedia: {
    paddingTop: '75%',
  },
  cardContent: {
    margin: 10,
  },
  cardActions: { marginLeft: 10 },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid}>
          <Grid container justify='space-evenly'>
            <Grid item direction='column' md={4} sm={8} xs={12}>
              <Typography
                component='h3'
                variant='h5'
                align='left'
                gutterBottom
                style={{ color: '#316099', marginBottom: 120 }}
              >
                We are very devoted to bringing you top-of-the-line device
                repair services without any additional costs.
              </Typography>

              <Card className={[classes.card, classes.marjBottom]}>
                <CardMedia style={{ margin: 'auto' }}>
                  <img
                    src={service3}
                    alt='service 1'
                    style={{
                      width: '182px',
                      height: '132px',
                    }}
                  />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'
                    style={{ color: '#5A98D0' }}
                  >
                    Fast Turnaround
                  </Typography>
                  <Typography color='textSecondary'>
                    Every device is repaired with super-fast turnaround at
                    Centric Wireless. So you can rest assured that your
                    electronic device will be fixed in no time.
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button size='small' style={{ color: '#ff6e49' }}>
                    Learn more <ArrowRightAltIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              direction='column'
              md={4}
              sm={8}
              xs={12}
              className={classes.cardContainer}
            >
              <Card className={[classes.card, classes.marjBottom]}>
                <CardMedia alignContent='center' style={{ margin: 'auto' }}>
                  <img
                    src={service1}
                    alt='service 1'
                    style={{
                      width: '182px',
                      height: '132px',
                    }}
                  />
                </CardMedia>

                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'
                    style={{ color: '#5A98D0' }}
                  >
                    Specialized Team
                  </Typography>
                  <Typography color='textSecondary'>
                    We are proud of our team members who are fully trained to
                    carry out such repair jobs. We take every repair task quite
                    seriously, no matter how simple and easy it is.
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button size='small' style={{ color: '#ff6e49' }}>
                    Learn more <ArrowRightAltIcon />
                  </Button>
                </CardActions>
              </Card>
              <Card className={[classes.card, classes.rightDownCard]}>
                <CardMedia alignContent='center' style={{ margin: 'auto' }}>
                  <img
                    src={service2}
                    alt='service 1'
                    style={{
                      width: '182px',
                      height: '132px',
                    }}
                  />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'
                    style={{ color: '#5A98D0' }}
                  >
                    Life Time Warranty
                  </Typography>
                  <Typography color='textSecondary'>
                    We offer life time warranty on parts and labor. If you run
                    into issues with our repair, we have got your back.
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button size='small' style={{ color: '#ff6e49' }}>
                    Learn more <ArrowRightAltIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};
export default Services;
