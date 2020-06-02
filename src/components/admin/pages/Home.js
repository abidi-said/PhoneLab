import React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
  Budget,
  LatestOrders,
  LatestProducts,
  UsersByDevice,
  LatestSales,
  TotalProfit,
  TasksProgress,
  TotalUsers
} from '../layout/dashbord';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
      display: 'flex'
    },
    shadow: {
      boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
      '&:hover': {
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
      }
    }
  })
);
const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12} boxShadow={4}>
          <Budget className={classes.shadow} />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalUsers className={classes.shadow} />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TasksProgress className={classes.shadow} />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit className={classes.shadow} />
        </Grid>
        {/* <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <LatestProducts />
        </Grid> */}
        <Grid item lg={12} md={12} xl={9} xs={12}>
          <LatestOrders className={classes.shadow} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
