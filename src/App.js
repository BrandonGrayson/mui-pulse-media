import React from "react"
import Navbar from "./Header_Footer/Header"
import { Box } from '@mui/material';
import "./App.css"
import Home from './Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Box
     sx={{
       bgcolor: "primary.main",
       height: '100vh'
     }}>
       <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
