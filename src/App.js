import { Box, Stack, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme  ({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} >
        <Navbar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
