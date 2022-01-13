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
        sx={{
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: '25px',
          '&.Mui-selected': {
            borderBottom: '3px solid white',
          },
        }}
      />
    );
  });

  return (
    <Tabs
      value={value}
      onChange={tabChangeHandler}
      textColor="white"
      sx={{ marginLeft: 'auto' }}
    >
      {NavigationTabs}
    </Tabs>
  );
};

export default Navigation;
