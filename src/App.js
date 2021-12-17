import React from "react"
import Navbar from "./Header_Footer/Header"
import { Box } from '@mui/material';
import "./App.css"




function App() {
  return (
    <Box
     sx={{
       bgcolor: "primary.main",
       height: "100vh"
     }}>
       <Navbar />
      <h1>Hello</h1>
    </Box>
  );
}

export default App;
