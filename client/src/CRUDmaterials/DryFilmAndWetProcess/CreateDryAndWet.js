import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function CreateDryAndWet() {
  let navigate = useNavigate();
  const [dryAndWet, setDryAndWet] = useState({
    _id: "",
    name: "",
    price: "",
  });

  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/addDryAndWets";
  const saveDryAndWet = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      name: dryAndWet.name,
      price: dryAndWet.price,
    };
    //use promises
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate("/listDryAndWet");
      })
      .catch((error) => setShowLoading(false));
  };

  // handles onChange event
  const onChange = (e) => {
    e.persist();
    setDryAndWet({ ...dryAndWet, [e.target.name]: e.target.value });
  };

  return (
    <Jumbotron>
      <div>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Form onSubmit={saveDryAndWet}>
          <Form.Group className="mb-3">
            <Form.Label>Dry Film & Wet Process Material Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Material Name"
              name="name"
              id="name"
              value={dryAndWet.name}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              name="price"
              id="price"
              value={dryAndWet.price}
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </Jumbotron>
  );
}
