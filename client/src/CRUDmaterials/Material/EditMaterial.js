import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

import { useNavigate, useParams } from "react-router-dom";

export default function EditMaterial() {
  let navigate = useNavigate();
  let { mId } = useParams();
  console.log(mId);

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
  const apiUrl = "http://localhost:3000/byId/" + mId;
  const apiUrlUpdate = "http://localhost:3000/materials/" + mId;
  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setMaterial(result.data);
      console.log(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const updateMaterial = (e) => {
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
    axios
      .put(apiUrlUpdate, data)
      .then((result) => {
        console.log("after calling put to update", result.data);
        setShowLoading(false);
        navigate("/listMaterial");
      })
      .catch((error) => setShowLoading(false));
  };

  const onChange = (e) => {
    e.persist();
    setMaterial({ ...material, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Jumbotron>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        <Form onSubmit={updateMaterial}>
          <Form.Group className="mb-3">
            <Form.Label>Material Type</Form.Label>
            <Form.Control
              aria-label="Default select example"
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
            <Form.Label>Number Of Use</Form.Label>
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
            Update
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
}
