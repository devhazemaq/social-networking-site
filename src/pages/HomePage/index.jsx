import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar"
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
import { Stack } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Sidebar/>
        <Feed />
        <Rightbar />
      </Stack>
    </>
  );
};

export default HomePage;
