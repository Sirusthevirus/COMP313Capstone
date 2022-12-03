import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
export default function Materials() {
  return (
    <div>
      <Jumbotron>
        <Link to={`/listMaterial`}>
          <Button>Laminate & Cover Coat & Stiffener & 3M Tapes</Button>
        </Link>
        
        <br /><br />


        <Link to={`/listAdditional`}>
          <Button>Additional Processes</Button>
        </Link>

        <br /><br />


        <Link to={`/listDryAndWet`}>
          <Button>Dry Film & Wet</Button>
        </Link>

        <br /><br />


        <Link to={`/listMechanical`}>
          <Button>Mechanical</Button>
        </Link>

        <br /><br />


        <Link to={`/listStandard`}>
          <Button>Standard Processes</Button>
        </Link>

        <br /><br />


        <Link to={`/listAssembly`}>
          <Button>Assembly</Button>
        </Link>
      </Jumbotron>
    </div>
  );
}
