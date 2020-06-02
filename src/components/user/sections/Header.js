import React from 'react';
import cover from '../../../img/illustration.png';
import Typography from '@material-ui/core/Typography';

import TabList from '../pages/TabList';

const Header = () => {
  return (
    <div fixed>
      <div
        style={{
          height: '91vh',
          display: 'flex',
          justifyContent: 'center',
          background:
            // 'linear-gradient(0deg, #5A98D0 8.84%, rgba(152, 195, 232, 0) 31.12%)',
            'linear-gradient(0deg, #98C3E8 8.84%, rgba(152, 195, 232, 0.1) 31.12%)',

          // backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          // backgroundSize: 'small',
          // backgroundAttachment: 'fixed'
          // backgroundColor: '#899fd4', // Average color of the background image.
        }}
      >
        <div
          style={{
            marginTop: '100px',
            justifyContent: 'center',
          }}
        >
          <div>
            <Typography
              component='h3'
              variant='h3'
              align='center'
              // color='secondary'
              gutterBottom
              style={{ color: '#5A98D0' }}
            >
              BROKEN PHONE ?
            </Typography>
            <Typography
              component='p'
              variant='body1'
              align='center'
              // color='secondary'
              gutterBottom
              style={{ color: '#5A98D0', animationDelay: '1000ms' }}
            >
              GET REPAIRS DONE WITHOUT LEAVING YOUR DOORSTEP
              <br /> RELIABLE, CONVENIENT & LOW COST!
            </Typography>
          </div>

          <TabList />
        </div>
      </div>
    </div>
  );
};

export default Header;
