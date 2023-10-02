import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} bgcolor={'teal'} sx={{ display: { xs: "none", sm:"block" }}} >
      
      <Box position="fixed">
        abc
      </Box>
    </Box>
  );
};
export default Rightbar;
