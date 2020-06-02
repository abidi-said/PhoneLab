import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import palette from '../../../../theme/palette';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    flexGrow: 0,
    flexShrink: 0
  },
  sm: {
    height: 1,
    width: 1
  },
  md: {
    height: 2,
    width: 2
  },
  lg: {
    height: 3,
    width: 3
  },
  neutral: {
    backgroundColor: palette.neutral
  },
  primary: {
    backgroundColor: palette.primary.main
  },
  info: {
    backgroundColor: palette.info.main
  },
  warning: {
    backgroundColor: palette.warning.main
  },
  danger: {
    backgroundColor: palette.error.main
  },
  success: {
    backgroundColor: palette.success.main
  }
}));

const StatusBullet = props => {
  const { className, size, color, ...rest } = props;

  const classes = useStyles();

  return (
    <span
      {...rest}
      className={clsx(
        {
          [classes.root]: true,
          [classes[size]]: size,
          [classes[color]]: color
        },
        className
      )}
    />
  );
};

StatusBullet.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'neutral',
    'primary',
    'info',
    'success',
    'warning',
    'danger'
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

StatusBullet.defaultProps = {
  size: 'md',
  color: 'default'
};

export default StatusBullet;
