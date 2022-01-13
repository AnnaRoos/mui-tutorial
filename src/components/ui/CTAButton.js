import React from 'react';

import Button from '@mui/material/Button';
import { theme } from './Theme';

const CTAButton = ({ position }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        ...theme.typography.estimate,
        ...position,
        borderRadius: '50px',
        height: '45px',
        minWidth: '150px',
      }}
    >
      Free Estimate
    </Button>
  );
};

export default CTAButton;
