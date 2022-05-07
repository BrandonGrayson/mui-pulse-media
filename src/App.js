import React from "react"
import { Box } from '@mui/material';
import "./App.css"
import Home from './Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>

  );
}

export default App;
