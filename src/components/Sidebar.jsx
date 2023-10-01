import { Home } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      // bgcolor={"orange"}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
      </List>

      {/* HomePage
Pages
Groups
NarketPlace
Friends
Settiings
Profile
switch */}
    </Box>
  );
};

export default Sidebar;
