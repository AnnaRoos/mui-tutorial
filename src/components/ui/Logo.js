import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import logo from '../../assets/logo.svg';

const Logo = ({ navigationHandler }) => {
  return (
    <Button
      component={Link}
      to="/"
      sx={{ padding: 0 }}
      onClick={navigationHandler}
    >
      <img
        id="logo"
        src={logo}
        alt="Arc Development company logo"
        style={{ height: '7em' }}
      />
    </Button>
  );
};

export default Logo;
