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

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1.5}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, position: "relative" }}
    >
      <Box position="fixed">
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
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
