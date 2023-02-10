import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css"
import Table from './Components/Table';
import Form from './Components/form';
import Graph from './Components/Graph';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/display" element={<Table />} />
          <Route exact path="/graph" element={<Graph />} />



        </Routes>
        {/* <Form /> */}
      </BrowserRouter>
    </>
  )
}

export default App