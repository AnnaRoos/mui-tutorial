import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled } from '@mui/system';

import logo from '../../assets/logo.svg';

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
}));

const Logo = styled('img')(({ theme }) => ({
  height: '56px',
  [theme.breakpoints.up('sx')]: {
    height: '48px',
  },
  [theme.breakpoints.up('md')]: {
    height: '64px',
  },
}));

const Header = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo src={logo} alt="Arc Development company logo" />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
};

export default Header;
