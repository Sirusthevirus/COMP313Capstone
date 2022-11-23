import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.css";
//
import Home from "./components/Home";
import Quote from "./components/Quote";
import Assembly from "./components/Assembly";
import Login from "./samplePages/Login";
import Manufacturing from "./components/Manufacturing";
import Processes from "./components/Processes";
import Materials from "./CRUDmaterials/Materials";

//Laminate & Cover Coat & Stiffener & 3M Tapes
import ListMaterial from "./CRUDmaterials/Material/ListMaterial";
import CreateMaterial from './CRUDmaterials/Material/CreateMaterial';
import EditMaterial from './CRUDmaterials/Material/EditMaterial'
//Additional Processes
import ListAdditional from "./CRUDmaterials/AdditionalProcess/ListAdditional";
import CreateAdditional from './CRUDmaterials/AdditionalProcess/CreateAdditional';
import EditAdditional from './CRUDmaterials/AdditionalProcess/EditAdditional'
//Dry Film & Wet Processes

//Mechanical Processes

//Standard Processes

import "./App.css";
import Summary from "./components/Summary";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {/* <Nav.Link href="/quote">Generate Quote</Nav.Link>
            <Nav.Link href="/assembly">Generate Assembly</Nav.Link>          
            <Nav.Link href="/manufacturing">Manufacturing</Nav.Link>
             <Nav.Link href="/processes">Processes</Nav.Link>
             <Nav.Link href="/summary">Summary</Nav.Link>   */}
            <Nav.Link href="/quotes">Quotes</Nav.Link>
            <NavDropdown title="Items" id="basic-nav-dropdown">
              <NavDropdown.Item href="materials">Materials</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sample pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="assembly" element={<Assembly />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="processes" element={<Processes />} />
          <Route path="summary" element={<Summary />} />
          <Route path="materials" element={<Materials />} />
          {/* route for meterials */}
          <Route path="listMaterial" element={<ListMaterial />} />
          <Route path="createMaterial" element={<CreateMaterial />} />
          <Route path="editMaterial/:mId" element={<EditMaterial />} />
          {/* route for additional process */}
          <Route path="listAdditional" element={<ListAdditional />} />
          <Route path="createAdditional" element={<CreateAdditional />} />
          <Route path="editAdditional/:aId" element={<EditAdditional />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
