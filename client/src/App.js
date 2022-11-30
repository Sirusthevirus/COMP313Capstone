import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.css";
//
import Home from "./components/Home";
import Quote from "./components/Quote/Quote";
import ListQuotes from "./components/Quote/ListQuotes";
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
//Dry Film & Wet Processes
import ListDryAndWet from "./CRUDmaterials/DryFilmAndWetProcess/ListDryAndWet";
import CreateDryAndWet from "./CRUDmaterials/DryFilmAndWetProcess/CreateDryAndWet";
//Mechanical Processes
import ListMechanical from "./CRUDmaterials/MechanicalProcess/ListMechanical";
import CreateMechanical from "./CRUDmaterials/MechanicalProcess/CreateMechanical";
//Standard Processes
import ListStandard from "./CRUDmaterials/StandardProcess/ListStandard";
import CreateStandard from "./CRUDmaterials/StandardProcess/CreateStandard";
//Assembly
import ListAssembly from "./CRUDmaterials/Assembly/ListAssembly";
import CreateAssembly from "./CRUDmaterials/Assembly/CreateAssembly";

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
            {/* <Nav.Link href="/quote">Quotes</Nav.Link> */}
            <Nav.Link href="/allQuotes">All Quotes</Nav.Link>
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
          <Route path="home" element={<Home />} />
          <Route path="allQuotes" element={<ListQuotes />} />
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
          {/* route for dry film & wet process */}
          <Route path="listDryAndWet" element={<ListDryAndWet />} />
          <Route path="createDryAndWet" element={<CreateDryAndWet />} />
          {/* route for mechanical process */}
          <Route path="listMechanical" element={<ListMechanical />} />
          <Route path="createMechanical" element={<CreateMechanical />} />
          {/* route for standard process */}
          <Route path="listStandard" element={<ListStandard />} />
          <Route path="createStandard" element={<CreateStandard />} />
          {/* route for assembly */}
          <Route path="listAssembly" element={<ListAssembly />} />
          <Route path="createAssembly" element={<CreateAssembly />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
