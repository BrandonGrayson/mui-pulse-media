import React from "react"
import Navbar from "./Header_Footer/Header"
import "./App.css"
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import { Box } from "@mui/material"

function App() {
  return (
    <>
      {/* <Box className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Box> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>


    </>



  );
}

export default App;
