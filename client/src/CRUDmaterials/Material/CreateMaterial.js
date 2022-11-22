import React, { useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function CreateMaterial() {
  let navigate = useNavigate();
  const [material, setMaterial] = useState({
    _id: "",
    materialType: "",
    supplier: "",
    material: "",
    code: "",
    numberOfUse: "",
    price: "",
  });
  const [showLoading, setShowLoading] = useState(false);

  const apiUrl = "http://localhost:3000/addMaterial";

  const saveMaterial = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      materialType: material.materialType,
      supplier: material.supplier,
      material: material.material,
      code: material.code,
      numberOfUse: material.numberOfUse,
      price: material.price,
    };
    //use promises
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate("/listMaterial");
      })
      .catch((error) => setShowLoading(false));
  };

  // handles onChange event
  const onChange = (e) => {
    e.persist();
    setMaterial({ ...material, [e.target.name]: e.target.value });
  };

  return (
    <Jumbotron>
      <div>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Form onSubmit={saveMaterial}>
          <Form.Group className="mb-3">
            <Form.Label>Material Type</Form.Label>
            <Form.Control
              as="select"
              name="materialType"
              id="materialType"
              value={material.materialType}
              onChange={onChange}
            >
              <option value="Laminate Material">Laminate Material</option>
              <option value="Cover Coat">Cover Coat</option>
              <option value="Stiffener">Stiffener</option>
              <option value="3M Tapes">3M Tapes</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              placeholder="supplier"
              name="supplier"
              id="supplier"
              value={material.supplier}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Material</Form.Label>
            <Form.Control
              type="text"
              placeholder="material"
              name="material"
              id="material"
              value={material.material}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="code"
              name="code"
              id="code"
              value={material.code}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>number Of Use</Form.Label>
            <Form.Control
              type="number"
              placeholder="numberOfUse"
              name="numberOfUse"
              id="numberOfUse"
              value={material.numberOfUse}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="price"
              name="price"
              id="price"
              value={material.price}
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
