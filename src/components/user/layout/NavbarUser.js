import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Avatar from '@material-ui/core/Avatar';
import logo from '../../../img/logo1.png';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        '&$selected': {
          backgroundColor: '#ff6e49',
        },
      },

      width: 400,
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    root: {
      flexGrow: 1,
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
    logoText: {
      color: 'black',
      fontSize: 25,
      letterSpacing: 3,
      pl: 1,
      [theme.breakpoints.down('sm')]: { fontSize: 25, letterSpacing: 1 },
    },
    stamp: {
      color: 'black',
      fontSize: 10,
      letterSpacing: 6,
      pl: 1,
      [theme.breakpoints.down('sm')]: { fontSize: 10, letterSpacing: 2 },
    },
    activeItem: { color: 'black' },
    selected: {
      color: 'red',
    },
  })
);

export default function PrimarySearchAppBar() {
  const [value, setValue] = React.useState(0);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Panel</MenuItem>
      <MenuItem onClick={handleMenuClose}>History</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      // color='#ff6e49'
    >
      <MenuItem>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <p>Services</p>
      </MenuItem>
      <MenuItem>
        <p>About</p>
      </MenuItem>
      <MenuItem>
        <p>Contact</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position='static'
        style={{
          background: 'rgba(255,255,255,0.9)',
        }}
      >
        <Toolbar>
          <Typography variant='h6' className={classes.logo}>
            <Avatar variant='square' src={logo} className={classes.large} />

            <Grid>
              <Typography>
                <Box className={classes.logoText}>PhoneLab</Box>
              </Typography>
              <Typography>
                <Box className={classes.stamp}>PHONE REPAIRE SERVICES</Box>
              </Typography>
            </Grid>
          </Typography>

          <div className={classes.grow} />

          <BottomNavigation
            showLabels
            className={classes.sectionDesktop}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label='Home' />
            <BottomNavigationAction
              // className={classes.selected}

              label='Services'
            />
            <BottomNavigationAction label='About' />
            <BottomNavigationAction label='Contact' />

            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              //   color='#6297cb'
              // backgroundColor='#ff6e49'
              style={{ color: '#ff6e49' }}
            >
              <AccountCircle />
            </IconButton>
          </BottomNavigation>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='default'
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
