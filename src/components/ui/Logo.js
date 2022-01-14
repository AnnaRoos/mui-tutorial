import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import logo from '../../assets/logo.svg';

const Logo = ({ navigationHandler }) => {
  return (
    <Button
      component={Link}
      to="/"
      sx={{ padding: 0 /* '&:hover': { backgroundColor: 'transparent' } */ }}
      onClick={navigationHandler}
      disableRipple
    >
      <img
        id="logo"
        src={logo}
        alt="Arc Development company logo"
        style={{ height: '8em' }}
      />
    </Button>
  );
};

export default Logo;
