import React from 'react';

import Button from '@mui/material/Button';
import { theme } from './Theme';

const CallToActionButton = ({ position }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        ...theme.typography.estimate,
        ...position,
        borderRadius: '50px',
        height: '45px',
      }}
    >
      Free Estimate
    </Button>
  );
};

export default CallToActionButton;
