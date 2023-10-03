import { Box, ThemeProvider, createTheme } from "@mui/material";
import HomePage from "./pages/HomePage";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme  ({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>

    <Box bgcolor={"background.default"} color={"text.primary"}>
      <HomePage mode={mode} setMode={setMode} />
    </Box>
    </ThemeProvider>
  );
}

export default App;
