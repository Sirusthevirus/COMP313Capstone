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


//Laminate 
import ListLaminate from "./CRUDmaterials/Laminate/ListLaminate";
import CreateLaminate from "./CRUDmaterials/Laminate/CreateLaminate";
import EditLaminate from "./CRUDmaterials/Laminate/EditLaminate";
//Cover Coat
import ListCoverCoat from './CRUDmaterials/CoverCoat/ListCoverCoat'
import CreateCoverCoat from './CRUDmaterials/CoverCoat/CreateCoverCoat'
import EditCoverCoat from './CRUDmaterials/CoverCoat/EditCoverCoat'
//Stiffener
import ListStiffener from './CRUDmaterials/Stiffener/ListStiffener';
import CreateStiffener from './CRUDmaterials/Stiffener/CreateStiffener';
import EditStiffener from './CRUDmaterials/Stiffener/EditStiffener';
//3M Tapes
import List3MTapes from './CRUDmaterials/3MTapes/List3MTapes'
import Create3MTapes from './CRUDmaterials/3MTapes/Create3MTapes'
import Edit3MTapes from './CRUDmaterials/3MTapes/Edit3MTapes'
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
            <NavDropdown title="Materials" id="basic-nav-dropdown">
              <NavDropdown.Item href="listLaminate">Laminate Material</NavDropdown.Item>
              <NavDropdown.Item href="listCoverCoat">Cover Coat</NavDropdown.Item>
              <NavDropdown.Item href="listStiffener">Stiffener</NavDropdown.Item>
              <NavDropdown.Item href="list3MTapes">3M Tapes</NavDropdown.Item>
              <NavDropdown.Item href="listAdditional">Additional Processes</NavDropdown.Item>
              <NavDropdown.Item href="listDryAndWet">Dry Film & Wet</NavDropdown.Item>
              <NavDropdown.Item href="listMechanical">Mechanical</NavDropdown.Item>
              <NavDropdown.Item href="listStandard">Standard Processes</NavDropdown.Item>
              <NavDropdown.Item href="listAssembly">Assembly</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
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
          {/* route for Laminate Material */}
          <Route path="listLaminate" element={<ListLaminate />} />
          <Route path="createLaminate" element={<CreateLaminate />} />
          <Route path="editLaminate/:mId" element={<EditLaminate />} />
          {/* route for Cover Coat */}
          <Route path="listCoverCoat" element={<ListCoverCoat />} />
          <Route path="createCoverCoat" element={<CreateCoverCoat />} />
          <Route path="editCoverCoat/:mId" element={<EditCoverCoat />} />
          {/* route for Stiffener */}
          <Route path="listStiffener" element={<ListStiffener />} />
          <Route path="createStiffener" element={<CreateStiffener />} />
          <Route path="editStiffener/:mId" element={<EditStiffener />} />
          {/* route for 3M Tapes */}
          <Route path="list3MTapes" element={<List3MTapes />} />
          <Route path="create3MTapes" element={<Create3MTapes />} />
          <Route path="edit3MTapes/:mId" element={<Edit3MTapes />} />
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
