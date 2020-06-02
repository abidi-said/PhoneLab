//secondary:#5A98D0
//primary:#ff6e49

import React from 'react';
import './App.css';
import MiniDrawer from './components/admin/layout/NavBar';
import HomeUser from './components/user/pages/Home';

import ManufacturerState from './context/manufacturer/ManufacturerState';

import PanneState from './context/panne/PanneState';

import ModelState from './context/model/ModelState';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TransporterState from './context/transporter/TransporterState';
import PicState from './context/pic/PicState';
import OrderState from './context/order/OrderState';
import { AnimatedSwitch } from 'react-router-transition';

import ButtonAppBar from './components/user/layout/NavbarUser';

function App() {
  return (
    <div className='App'>
      <ButtonAppBar />
      <Router>
        <ManufacturerState>
          <ModelState>
            <PanneState>
              <TransporterState>
                <PicState>
                  <OrderState>
                    <AnimatedSwitch
                      atEnter={{ opacity: 0 }}
                      atLeave={{ opacity: 0 }}
                      atActive={{ opacity: 1 }}
                      className='switch-wrapper'
                    >
                      <Route exact path='/dashboard' component={MiniDrawer} />
                      <Route exact path='/' component={HomeUser} />
                    </AnimatedSwitch>
                  </OrderState>
                </PicState>
              </TransporterState>
            </PanneState>
          </ModelState>
        </ManufacturerState>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
