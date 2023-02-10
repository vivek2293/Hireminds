import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css"
import Table from './Components/Table';
import Form from './Components/Form';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route exact path="/" element={<Table />} />
        </Routes> */}
        <Form />
      </BrowserRouter>
    </>
  )
}

export default App