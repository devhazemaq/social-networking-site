import React from "react";
import Post from "../Post";
import { Box } from "@mui/material";

const Feed = () => {
  return (
    <Box sx={{ paddingTop: "35px" }} flex={4} p={1} mt={3}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
