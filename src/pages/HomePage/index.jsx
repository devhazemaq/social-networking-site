import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
import { Stack } from "@mui/material";
import Add from "../../components/Add";

const HomePage = ({ mode, setMode }) => {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar mode={mode} setMode={setMode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </>
  );
};

export default HomePage;
