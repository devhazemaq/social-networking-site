import { Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
    <Navbar />
    
    <Stack direction="row" justifyContent="space-between" spacing={2} >
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </Stack>
    </>

  );
}

export default App;
