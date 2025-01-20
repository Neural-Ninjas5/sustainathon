import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';

export default function SideBar() {
  const location = useLocation();
  const allRoutes = ['Dashboard', 'Add-Products','Existing-Products','Orders','Reviews and Feedback', 'Notifications', 'Settings'];
  const routePaths = {
    'Dashboard': '/',
    'Add-Products': '/add-products',
    'Existing-Products': '/existing-products',
    'Orders': '/orders',
    'Reviews and Feedback': '/reviews',
    'Notifications': '/notifications',
    'Settings': '/settings'
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {allRoutes.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={routePaths[text]}
              selected={location.pathname === routePaths[text]}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer variant="permanent" open>
      {DrawerList}
    </Drawer>
  );
}
