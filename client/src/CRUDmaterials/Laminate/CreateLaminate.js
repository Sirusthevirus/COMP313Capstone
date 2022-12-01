import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function CreateLaminate() {
  let navigate = useNavigate();
  const [laminate, setLaminate] = useState({
    materialType: "",
    supplier: "",
    material: "",
    cuWeight: "",
    price: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/addMaterial";
  const saveLaminate = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      materialType: laminate.materialType,
      supplier: laminate.supplier,
      material: laminate.material,
      cuWeight: laminate.cuWeight,
      price: laminate.price,
    };
    //use promises
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate("/listLaminate");
      })
      .catch((error) => setShowLoading(false));
  };
  // handles onChange event
  const onChange = (e) => {
    e.persist();
    setLaminate({ ...laminate, [e.target.name]: e.target.value });
  };
  return (
    <Jumbotron>
      <div>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Form onSubmit={saveLaminate}>
          <Form.Group className="mb-3">
            <Form.Label>Material Type</Form.Label>
            <Form.Control
              as="select"
              name="materialType"
              id="materialType"
              value={laminate.materialType}
              onChange={onChange}
            >
              <option>Select . . .</option>
              <option value="Laminate Material">Laminate Material</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              placeholder="Supplier"
              name="supplier"
              id="supplier"
              value={laminate.supplier}
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
              value={laminate.material}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cu Weight"
              name="cuWeight"
              id="cuWeight"
              value={laminate.cuWeight}
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
              value={laminate.price}
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
