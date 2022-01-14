import React, { useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';

const TabMenu = ({ options }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const openMenuHandler = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const closeMenuHandler = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuItemHandler = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const menuItems = options.item.map((item) => {
    return <MenuItem onClick={menuItemHandler}>{item}</MenuItem>;
  });

  return (
    <Menu
      id={options.id}
      anchorEl={anchorEl}
      open={open}
      onClose={closeMenuHandler}
    >
      {menuItems}
    </Menu>
  );
};

export default TabMenu;
