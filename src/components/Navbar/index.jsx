import React from "react";

import {
  StyledSearch,
  StyledToolbar,
  SearchIconWrapper,
  IconB,
  UserBox,
} from "./style";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Mail, Notifications } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="fixed" >
        <StyledToolbar>
          <Typography variant="h6">Haz Haz</Typography>
          <StyledSearch>
            <SearchIconWrapper>
              <SearchIcon color="disabled" sx={{ marginRight: "50px" }} />
            </SearchIconWrapper>
            <InputBase
              sx={{ marginLeft: "25px", width: "90%" }}
              placeholder="Search..."
            />
          </StyledSearch>
          <IconB>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={13} color="error">
              <Notifications />
            </Badge>
            <Avatar src="/assets/images/hhh.jpg" alt="profile img" />
          </IconB>
          <UserBox>
            <Avatar src="/assets/images/hhh.jpg" alt="profile img" />
            <Typography variant="span">Hazem</Typography>
          </UserBox>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
