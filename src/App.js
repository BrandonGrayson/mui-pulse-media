import React from "react"
import Navbar from "./Header_Footer/Header"
import "./App.css"
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';


function App() {
  return (
    <Box id="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
