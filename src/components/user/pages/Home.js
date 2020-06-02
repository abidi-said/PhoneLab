import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Header from '../sections/Header';
import Services from '../sections/Services';

import Footer from '../sections/Footer';
import AboutUs from '../sections/AboutUs';
import Footer2 from './Footer2';
import OurClient from '../sections/OurClient';
import OurProject from '../sections/OurProject';

function Home() {
  return (
    <div>
      <Header />
      <CssBaseline />

      <Services />
      {/* <AboutUs /> */}
      <OurProject />

      <OurClient />
      {/* <Footer /> */}
      {/* <Footer2 /> */}
    </div>
  );
}

export default Home;
