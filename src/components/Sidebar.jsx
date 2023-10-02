import { AccountBox, Article, Group, Home, Person, Settings, Storefront,ModeNight } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
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
          <ListItemButton component="a" href="#simple-list" >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        {/* -----<>------ */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list" >
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        {/* -----<>------ */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list" >
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        {/* -----<>------ */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list" >
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list" >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        {/* -----<>------ */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list" >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        {/* -----<>------ */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list" >
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        {/* -----<>------ */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list" >
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch/>
          </ListItemButton>
        </ListItem>
        {/* -----<>------ */}
        
      </List>
    </Box>
  );
};

export default Sidebar;
