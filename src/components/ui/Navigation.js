import React from 'react';
import { Link } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { pages } from '../../config/pageConfig';
import { theme } from './Theme';

const Navigation = ({ navigationHandler, value }) => {
  const pageTabs = pages.slice(0, 5);

  const navigationTabs = pageTabs.map((page) => {
    return (
      <Tab
        label={page.title}
        key={page.title}
        component={Link}
        to={page.path}
        sx={{
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: '25px',
          '&.Mui-selected': {
            borderBottom: '3px solid white',
            color: 'white',
          },
        }}
      />
    );
  });

  return (
    <Tabs
      value={value}
      onChange={navigationHandler}
      textColor="inherit"
      sx={{ marginLeft: 'auto' }}
    >
      {navigationTabs}
    </Tabs>
  );
};

export default Navigation;
