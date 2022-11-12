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
import Quote from './components/Quote';
import Manufacturing from './components/Manufacturing';
import Processes from './components/Processes';
//
//import Sidebar from './components/Sidebar';


//


//

import './App.css';
import { Container } from 'react-bootstrap';

function App() {

  // return(
  //   <div className='main'>
  //     <div className='sidebar'>

  //     </div>
  //     <div className='container'>

  //     </div>
  //   </div>
  // )

   return (
     <Router>
       <Navbar bg="light" expand="lg">
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto">
             <Nav.Link href="/home">Home</Nav.Link>
             <Nav.Link href="/quote">Generate Quote</Nav.Link>
             <Navbar.Collapse id="generate-quote">
             
             </Navbar.Collapse>

             <Nav.Link href="/manufacturing">Manufacturing</Nav.Link>
             <Nav.Link href="/processes">Processes</Nav.Link>

             
     

           </Nav>
         </Navbar.Collapse>
       </Navbar>
    
       <div>          
           <Route render ={()=> < Home />} path="/home" />
           <Route render ={()=> < Quote />} path="/quote" />
           <Route render={()=> <Manufacturing />} path="/manufacturing" />
           <Route render={()=> <Processes />} path="/processes" />
       </div>

     </Router>
   ); 
}

export default App;
