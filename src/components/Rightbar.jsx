import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={1} p={2} bgcolor={'teal'} sx={{ display: { xs: "none", sm:"block" }}} >Rightbar</Box>
  );
};
export default Rightbar;
