import React from "react"
import Navbar from "./Header_Footer/Header"
import { Box } from '@mui/material';
import "./App.css"
import Home from './Home'

function App() {
  return (
    <Box
     sx={{
       bgcolor: "primary.main",
       height: "100vh"
     }}>
       <Navbar />
      <Home />
    </Box>
  );
}

export default App;
