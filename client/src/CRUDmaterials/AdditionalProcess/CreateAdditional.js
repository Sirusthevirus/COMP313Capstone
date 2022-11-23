import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function CreateAdditional() {
  let navigate = useNavigate();
  const [additional, setAdditional] = useState({
    _id: "",
    name: "",
    price: "",
  });

  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/addAdditionals";

  const saveAdditional = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      name: additional.name,
      price: additional.price,
    };
    //use promises
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate("/listAdditional");
      })
      .catch((error) => setShowLoading(false));
  };
  // handles onChange event
  const onChange = (e) => {
    e.persist();
    setAdditional({ ...additional, [e.target.name]: e.target.value });
  };
  return (
    <Jumbotron>
      <div>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Form onSubmit={saveAdditional}>
          <Form.Group className="mb-3">
            <Form.Label>Additional Process Material Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Material Name"
              name="name"
              id="name"
              value={additional.name}
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
              value={additional.price}
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
