import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(10)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  }
}));

export default function ImageAvatars({ urlImg }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        variant='rounded'
        alt='Remy Sharp'
        src={urlImg}
        className={classes.large}
      />
    </div>
  );
}
