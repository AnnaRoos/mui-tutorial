import React, { useState, useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CTAButton from './CTAButton';
import Logo from './Logo';
import Navigation from './Navigation';

import { pages } from '../../config/pageConfig';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled } from '@mui/system';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const ToolbarMargin = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: '3em',
}));

const Header = () => {
  const [value, setValue] = useState(0);

  const navigationHandler = (event, newValue) => {
    if (event.target.id === 'logo') {
      setValue(0);
    } else {
      setValue(newValue);
    }
  };

  useEffect(() => {
    pages.forEach((page, index) => {
      if (window.location.pathname === page.path && value !== index) {
        setValue(index);
      }
    });
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo navigationHandler={navigationHandler} />
            <Navigation navigationHandler={navigationHandler} value={value} />
            <CTAButton position={{ marginLeft: '50px', marginRight: '25px' }} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
};

export default Header;
