import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css"
import Dashboard from './Components/Dashboard';
import Homepage from './Components/Homepage';
import Shortlisting from './Components/Shortlisting';
import Login from './Components/Login';
import Selection from './Components/Selection';
import RegisterPage2 from './Components/Signup';
import Testing from './Components/testing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/dashboard" element={<Dashboard />} /> 
          <Route exact path="/shortlisted" element={<Shortlisting />} /> 
          <Route exact path="/login" element={<Login />} /> 
          <Route exact path="/selection" element={<Selection />} /> 
          <Route exact path="/register" element={<RegisterPage2 />} />  
          <Route exact path="/testing" element={<Testing />} />  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App