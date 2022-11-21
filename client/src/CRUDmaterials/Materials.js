import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
export default function Materials() {
  return (
    <div>
      <Jumbotron>
        <Link to={`/listMaterial`}>List all Material</Link>
        <br />
        <Link to={`/createMaterial`}>Add Material</Link>
      </Jumbotron>
    </div>
  );
}
