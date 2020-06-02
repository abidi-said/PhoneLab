import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import CategoryIcon from '@material-ui/icons/Category';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PermDeviceInformationIcon from '@material-ui/icons/PermDeviceInformation';
import PhonelinkEraseIcon from '@material-ui/icons/PhonelinkErase';
import MenuItem from '@material-ui/core/MenuItem';

import * as mocks from '../../data/mocks';
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.primary,
    width: 'auto',
  },
  appBar: {
    backgroundColor: '#ff6e49',
    [theme.breakpoints.up('md')]: { marginTop: 30 },
    [theme.breakpoints.down('md')]: { marginTop: 0 },
  },
  actionButtons: {
    [theme.breakpoints.up('md')]: { width: 200 },

    [theme.breakpoints.down('md')]: { width: 150 },

    boxShadow: '5px 10px 20px rgba(53, 110, 173, 0.6) ',

    borderRadius: '3px',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(-1);

  const [brandValue, setBrandValue] = React.useState([]);
  const [brandStatus, setBrandStatus] = React.useState(false);

  const [modelValue, setModelValue] = React.useState([]);
  const [modelStatus, setModelStatus] = React.useState(true);

  const [typeValue, setTypeValue] = React.useState([]);
  const [typeStatus, setTypeStatus] = React.useState(true);

  const [panneValue, setPanneValue] = React.useState([]);
  const [panneStatus, setPanneStatus] = React.useState(true);

  const [resetStatus, setResetStatus] = React.useState(false);
  const [sendStatus, setSendStatus] = React.useState(false);

  const [brand, setBrand] = React.useState([]);
  const [model, setModel] = React.useState([]);
  const [type, setType] = React.useState([]);
  const [panne, setPanne] = React.useState([]);

  React.useEffect(() => {
    setBrand(mocks.brand);
    setModel(mocks.model);
    setType(mocks.type);
    setPanne(mocks.panne);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div>
      <div
        className={classes.root}
        style={{
          backgroundColor: 'white',
          boxShadow: '5px 10px 20px rgba(53, 110, 173, 0.5) ',
          // position: 'relative'
        }}
      >
        <AppBar
          position='static'
          // color='#ff6e49'

          className={classes.appBar}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='default'
            style={{ color: 'white' }}
            variant='fullWidth'
            aria-label='Selector form'
          >
            <Tab
              label={brandValue.name ? brandValue.name : 'Brand'}
              icon={<CategoryIcon />}
              disabled={brandStatus}
              {...a11yProps(0)}
            />

            <Tab
              label={!modelValue.name ? 'Model' : modelValue.name}
              icon={<PhoneIphoneIcon />}
              disabled={modelStatus}
              {...a11yProps(1)}
            />

            <Tab
              label={typeValue.name ? typeValue.name : 'Type'}
              icon={<PermDeviceInformationIcon />}
              disabled={typeStatus}
              {...a11yProps(2)}
            />
            <Tab
              label={panneValue.name ? panneValue.name : 'Panne'}
              icon={<PhonelinkEraseIcon />}
              disabled={panneStatus}
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          // axis='x'
          index={value}
          onChangeIndex={handleChangeIndex}
          style={{ background: '#ff6e49' }}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {brand.map((b) => (
              <MenuItem
                key={b.id}
                value={b.id}
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#ff6e49',
                  color: 'white',
                }}
                onClick={() => {
                  setBrandValue(b);
                  setValue(1);
                  setModelStatus(false);
                  //reset model value
                  if (modelValue) {
                    setModelValue([]);
                  }
                  //reset type value
                  if (typeValue) {
                    setTypeValue([]);
                    setTypeStatus(true);
                  }
                  // reset panne status
                  if (!panneStatus) {
                    setPanneStatus(true);
                  }
                }}
              >
                <ListItem divider key={b.id}>
                  <ListItemText primary={b.name} />
                </ListItem>
              </MenuItem>
            ))}
          </TabPanel>

          <TabPanel disable value={value} index={1}>
            {model
              .filter((m) => m.brand_id === brandValue.id)
              .map((m) => (
                <MenuItem
                  key={m.id}
                  value={m.id}
                  style={{
                    backgroundColor: '#ff6e49',
                    color: 'white',
                  }}
                  onClick={() => {
                    setModelValue(m);
                    setValue(2);
                    setTypeStatus(false);

                    //reset type value
                    if (typeValue) {
                      setTypeValue([]);
                    }
                    // reset panne status
                    if (!panneStatus) {
                      setPanneStatus(true);
                    }
                  }}
                >
                  <ListItem divider key={m.id}>
                    <ListItemText primary={m.name} />
                  </ListItem>
                </MenuItem>
              ))}
          </TabPanel>
          <TabPanel value={value} index={2}>
            <List
              dense
              disablePadding
              style={{
                width: '100%',
                overflow: 'auto',
                maxHeight: 150,
              }}
            >
              {type
                .filter((t) => t.model_id === modelValue.id)
                .map((t) => (
                  <MenuItem
                    key={t.id}
                    value={t.id}
                    style={{
                      backgroundColor: '#ff6e49',
                      color: 'white',
                    }}
                    onClick={() => {
                      setTypeValue(t);
                      setValue(3);
                      setPanneStatus(false);
                    }}
                  >
                    <ListItem divider key={t.id}>
                      <ListItemText primary={t.name} />
                    </ListItem>
                  </MenuItem>
                ))}
            </List>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <List
              style={{
                width: '100%',
                overflow: 'auto',
                maxHeight: 150,
              }}
            >
              {panne.map((p) => (
                <MenuItem
                  key={p.id}
                  value={p.id}
                  style={{
                    backgroundColor: '#ff6e49',
                    color: 'white',
                  }}
                  onClick={() => {
                    setPanneValue(p);
                    setValue(-1);
                    setBrandStatus(true);
                    setModelStatus(true);
                    setTypeStatus(true);
                    setPanneStatus(true);

                    setResetStatus(true);
                    setSendStatus(true);

                    console.log(brandValue);
                  }}
                >
                  <ListItem divider key={p.id}>
                    <ListItemText primary={p.name} />
                  </ListItem>
                </MenuItem>
              ))}
            </List>
          </TabPanel>
        </SwipeableViews>
      </div>
      <Grid container spacing={3} justify='center' style={{ marginTop: 50 }}>
        <Grid item>
          <Button
            disabled={!sendStatus}
            className={classes.actionButtons}
            style={{
              background: '#5A98D0',
              color: 'white',
            }}
          >
            Send for fix
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled={!resetStatus}
            className={classes.actionButtons}
            style={{
              background: '#ff6e49',
              color: 'white ',
            }}
            onClick={() => {
              //reset brand
              setBrandValue([]);
              setBrandStatus(false);
              //reset model value

              setModelValue([]);

              //reset type value

              setTypeValue([]);

              // reset panne status
              setPanneValue([]);
              // reset buttons status
              setResetStatus(false);
              setSendStatus(false);
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
