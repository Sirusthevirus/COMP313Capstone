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
        
        <br />
      </Jumbotron>
    </div>
  );
}
