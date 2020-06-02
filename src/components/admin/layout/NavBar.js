import React, { useState } from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import HomeIcon from '@material-ui/icons/Home';

import InputLabel from '@material-ui/core/InputLabel';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Mobile from '../pages/Mobile/Mobile';
import Home from './../pages/Home';
import About from './../pages/About';

import logo from '../../../img/logo1.png';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
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
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    grow: {
      flexGrow: 1,
    },

    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    shadow: {
      boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    },
    logoText: {
      color: 'inherit',
      fontSize: 25,
      letterSpacing: 3,
      pl: 1,
      [theme.breakpoints.down('sm')]: { fontSize: 25, letterSpacing: 1 },
    },
    stamp: {
      color: 'inherit',
      fontSize: 10,
      letterSpacing: 6,
      pl: 1,
      [theme.breakpoints.down('sm')]: { fontSize: 10, letterSpacing: 2 },
    },
    decoration: {
      textDecoration: 'none',
    },
    activeItem: {
      width: 500,
    },
  })
);
export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
  return (
    <div className={classes.root} style={{ backgroundColor: '#edeaea' }}>
      <CssBaseline />
      <AppBar
        // style={{ background: 'linear-gradient(#a389d4,#6297cb)' }}
        style={{ background: '#5A98D0' }}
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.shadow}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.logo}>
            <Avatar variant='rounded' src={logo} className={classes.large} />

            <Grid>
              <Typography>
                <Box className={classes.logoText} pl={1}>
                  PHONELAB
                </Box>
              </Typography>
              <Typography>
                <Box className={classes.stamp} pl={1}>
                  PHONE REPAIRE SERVICES
                </Box>
              </Typography>
            </Grid>
          </Typography>
          {/* right menu */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>
          {/* end right menu */}
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Router>
        <Drawer
          variant='permanent'
          className={clsx(
            classes.drawer,
            {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            },
            classes.shadow
          )}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <List>
            {['Home', 'Mobile'].map((text, index) => (
              <Link to={`/dashboard/${text}`} className={classes.decoration}>
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <AddToHomeScreenIcon />}
                  </ListItemIcon>
                  <InputLabel>{text}</InputLabel>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Redirect exact from='/dashboard/Home' to='/dashboard' />
            <Route exact path='/dashboard' component={Home} />

            <Route exact path='/dashboard/mobile' component={Mobile} />
            <Route exact path='/dashboard/about' component={About} />
            {/* <Route exact path='/users' component={Index} /> */}
          </Switch>
          <div style={{ padding: '20px' }} />
        </main>
      </Router>
    </div>
  );
}
