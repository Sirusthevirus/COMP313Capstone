import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function CreateStiffener() {
  let navigate = useNavigate();
  const [stiffener, setStiffener] = useState({
    materialType: "",
    supplier: "",
    material: "",
    thickness: "",
    price: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/addMaterial";
  const saveStiffener = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      materialType: stiffener.materialType,
      supplier: stiffener.supplier,
      material: stiffener.material,
      thickness: stiffener.thickness,
      price: stiffener.price,
    };
    //use promises
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate("/listStiffener");
      })
      .catch((error) => setShowLoading(false));
  };
  const onChange = (e) => {
    e.persist();
    setStiffener({ ...stiffener, [e.target.name]: e.target.value });
  };
  return (
    <Jumbotron>
      <div>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Form onSubmit={saveStiffener}>
          <Form.Group className="mb-3">
            <Form.Label>Material Type</Form.Label>
            <Form.Control
              as="select"
              name="materialType"
              id="materialType"
              value={stiffener.materialType}
              onChange={onChange}
            >
              <option>Select . . .</option>
              <option value="Stiffener">Stiffener</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              placeholder="Supplier"
              name="supplier"
              id="supplier"
              value={stiffener.supplier}
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
              value={stiffener.material}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Thickness</Form.Label>
            <Form.Control
              type="text"
              placeholder="Thickness"
              name="thickness"
              id="thickness"
              value={stiffener.thickness}
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
              value={stiffener.price}
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
