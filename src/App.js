import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css"
import Table from './Components/Table';
import Form from './Components/form';
import Graph from './Components/Graph';
import Dashboard from './Components/Dashboard';
import Company from './Components/Company';
import AddCompany from './Components/AddCompany';
import Homepage from './Components/Homepage';
import Filter from './Components/Filter';
import Shortlisting from './Components/Shortlisting';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/display" element={<Table />} /> 
          <Route exact path="/graph" element={<Graph />} />
          <Route exact path="/dashboard" element={<Dashboard />} /> 
          <Route exact path="/company" element={<Company />} /> 
          <Route exact path="/add" element={<AddCompany />} /> 
          <Route exact path="/landing" element={<Homepage />} /> 
          <Route exact path="/filter" element={<Filter />} /> 
          <Route exact path="/shortlisted" element={<Shortlisting />} /> 


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App