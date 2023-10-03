import React, { useState } from "react";

import { Bookmark, ContentCut, Delete, Edit, Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

const Post = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card sx={{ m: 5 }}>
        <CardHeader
          position="relative"
          avatar={
            <Avatar sx={{ bgcolor: "teal" }} aria-label="recipe">
              H
            </Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              id="iconbutton-settings"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
          }
          title="Ahmed Mohsen"
          subheader="September 14, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/460295/pexels-photo-460295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "iconbutton-settings",
        }}
      >
        <MenuItem>
          <ListItemIcon onClick={handleClose} >
            <Bookmark fontSize="small" />
          </ListItemIcon>
          <ListItemText>Save post</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon onClick={handleClose} >
            <Edit fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit post</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon onClick={handleClose} >
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete post</ListItemText>
        </MenuItem>
        
      </Menu>
    </>
  );
};

export default Post;
