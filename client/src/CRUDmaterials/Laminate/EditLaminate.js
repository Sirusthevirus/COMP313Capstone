import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function EditLaminate() {
  let navigate = useNavigate();
  let { mId } = useParams();
  console.log(mId);

  const [laminate, setLaminate] = useState({
    _id: "",
    materialType: "",
    supplier: "",
    material: "",
    cuWeight: "",
    price: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/byId/" + mId;
  const apiUrlUpdate = "http://localhost:3000/materials/" + mId;
  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setLaminate(result.data);
      console.log(result.data);
      setShowLoading(false);
    };
    fetchData();
  }, []);
  const updateLaminate = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      materialType: laminate.materialType,
      supplier: laminate.supplier,
      material: laminate.material,
      cuWeight: laminate.cuWeight,
      price: laminate.price,
    };
    axios
      .put(apiUrlUpdate, data)
      .then((result) => {
        console.log("after calling put to update", result.data);
        setShowLoading(false);
        navigate("/listLaminate");
      })
      .catch((error) => setShowLoading(false));
  };
  const onChange = (e) => {
    e.persist();
    setLaminate({ ...laminate, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Jumbotron>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        <Form onSubmit={updateLaminate}>
          <Form.Group className="mb-3">
            <Form.Label>Material Type</Form.Label>
            <Form.Control
              aria-label="Default select example"
              as="select"
              name="materialType"
              id="materialType"
              value={laminate.materialType}
              onChange={onChange}
            >
              <option value="Laminate Material">Laminate Material</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              placeholder="supplier"
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
            <Form.Label>Cu Weight</Form.Label>
            <Form.Control
              type="number"
              placeholder="CuWeight"
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
              placeholder="price"
              name="price"
              id="price"
              value={laminate.price}
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
