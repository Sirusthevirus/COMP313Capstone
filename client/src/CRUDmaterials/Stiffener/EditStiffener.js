import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function EditStiffener() {
  let navigate = useNavigate();
  let { mId } = useParams();
  console.log(mId);
  const [stiffener, setStiffener] = useState({
    _id: "",
    materialType: "",
    supplier: "",
    material: "",
    thickness: "",
    price: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/byId/" + mId;
  const apiUrlUpdate = "http://localhost:3000/materials/" + mId;

  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setStiffener(result.data);
      console.log(result.data);
      setShowLoading(false);
    };
    fetchData();
  }, []);

  const updateStiffener = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      materialType: stiffener.materialType,
      supplier: stiffener.supplier,
      material: stiffener.material,
      thickness: stiffener.thickness,
      price: stiffener.price,
    };
    axios
      .put(apiUrlUpdate, data)
      .then((result) => {
        console.log("after calling put to update", result.data);
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
    <div>
      <Jumbotron>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        <Form onSubmit={updateStiffener}>
          <Form.Group className="mb-3">
            <Form.Label>Material Type</Form.Label>
            <Form.Control
              aria-label="Default select example"
              as="select"
              name="materialType"
              id="materialType"
              value={stiffener.materialType}
              onChange={onChange}
            >
              <option value="Stiffener">Stiffener</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              placeholder="supplier"
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
              type="number"
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
              placeholder="price"
              name="price"
              id="price"
              value={stiffener.price}
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
