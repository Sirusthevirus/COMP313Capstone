import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Create3MTapes() {
  let navigate = useNavigate();
  const [tapes, set3MTapes] = useState({
    materialType: "",
    supplier: "",
    material: "",
    modelNumber: "",
    price: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/addMaterial";
  const save3MTapes = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      materialType: tapes.materialType,
      supplier: tapes.supplier,
      material: tapes.material,
      modelNumber: tapes.modelNumber,
      price: tapes.price,
    };
    //use promises
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate("/list3MTapes");
      })
      .catch((error) => setShowLoading(false));
  };
  // handles onChange event
  const onChange = (e) => {
    e.persist();
    set3MTapes({ ...tapes, [e.target.name]: e.target.value });
  };
  return (
    <Jumbotron>
      <div>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Form onSubmit={save3MTapes}>
          <Form.Group className="mb-3">
            <Form.Label>Material Type</Form.Label>
            <Form.Control
              as="select"
              name="materialType"
              id="materialType"
              value={tapes.materialType}
              onChange={onChange}
            >
              <option>Select . . .</option>
              <option value="3M Tapes">3M Tapes</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              placeholder="Supplier"
              name="supplier"
              id="supplier"
              value={tapes.supplier}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Material Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Material Name"
              name="material"
              id="material"
              value={tapes.material}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Model Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Model Number"
              name="modelNumber"
              id="modelNumber"
              value={tapes.modelNumber}
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
              value={tapes.price}
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
