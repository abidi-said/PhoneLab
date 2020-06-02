import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const footer = () => {
  return (
    <div
      style={{
        height: '50vh',
        backgroundColor: '#3c3e41',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div>
        <span>Copyright © DigitalPlusses 2019</span>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <FacebookIcon
            style={{
              cursor: 'pointer',
              color: '#274986'
            }}
          />

          <YouTubeIcon
            style={{
              cursor: 'pointer',
              color: 'red'
            }}
          />
          <InstagramIcon
            style={{
              cursor: 'pointer',
              color: '#E1306C'
            }}
          />
          <TwitterIcon
            style={{
              cursor: 'pointer',
              color: '#1DA1F2'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default footer;
