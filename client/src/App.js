import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
//
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
//
import Home from './components/Home';
import Quote from './components/Quote'
//



//


//

import './App.css';

function App() {

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/quote">Generate Quote</Nav.Link>
     

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
      <div>          
          <Route render ={()=> < Home />} path="/home" />
          <Route render ={()=> < Quote />} path="/quote" />
      </div>

    </Router>
  );
}

export default App;
