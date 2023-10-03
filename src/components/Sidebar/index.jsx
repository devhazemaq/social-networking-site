import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { menuItemsForSidebar } from "../../constants";
import { ModeNight } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      sx={{ backgroundColor: "tan",  display: { xs: "none", sm: "block" } }}
      flex={1}
      p={2}
    >
      <List>
        {menuItemsForSidebar?.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
