import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  avatarUsers,
  latestConversations,
  latestPhotos,
} from "../../constants";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} pt={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          {avatarUsers?.map((item, index) => (
            <Avatar key={index} alt={item.name} src={item.image} />
          ))}
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          {latestPhotos?.map((item, index) => (
            <ImageListItem key={index}>
              <img src={item.image} alt={item.name} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            paddingTop: "0",
          }}
        >
          {latestConversations?.map((item, index) => (
            <>
              <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.title} src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.message}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {index < latestConversations.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
