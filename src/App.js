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
         height: 'inherit',
         flexDirection: 'column',
         alignItems: 'center',
         mt: '10%'
       }}>
       <Typography
        >Stimulate Growth... 
        </Typography>
        <Typography >
          By leveraging your online resources.
        </Typography>
       </Box>
    </Box>
  );
}

export default App;
