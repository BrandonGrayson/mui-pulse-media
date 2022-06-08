import React from "react"
import Navbar from "./Header_Footer/Header"
import "./App.css"
import Home from './Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
