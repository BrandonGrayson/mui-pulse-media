import React from "react"
import Navbar from "./Header_Footer/Header"
import { Box, Typography } from '@mui/material';
import "./App.css"




function App() {
  return (
    <Box
     sx={{
       bgcolor: "primary.main",
       height: "100vh"
     }}>
       <Navbar />
       <Box sx={{
         display: 'flex',
         justifyContent: 'center',
         bgcolor: 'red',
         height: 'inherit',
         alignItems: 'center'
       }}>
       <Typography>Hello</Typography>
       </Box>
      
    </Box>
  );
}

export default App;
