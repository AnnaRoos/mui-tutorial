import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { theme } from './Theme';

const Navigation = () => {
  const [value, setValue] = useState(0);

  const tabChangeHandler = (event, newValue) => {
    setValue(newValue);
  };

  const NavigationTabs = [
    'Home',
    'Services',
    'The Revolution',
    'About Us',
    'Contact Us',
  ].map((tab, index) => {
    return (
      <Tab
        label={tab}
        key={tab}
        value={index}
        sx={{
          ...theme.typography.tab,
          color: theme.palette.common.white,
          minWidth: 10,
          marginLeft: '25px',
          '&.Mui-selected': {
            color: theme.palette.common.arcOrange,
          },
        }}
      />
    );
  });

  return (
    <Tabs value={value} onChange={tabChangeHandler}>
      {NavigationTabs}
    </Tabs>
  );
};

export default Navigation;
