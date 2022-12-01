import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Edit3MTapes() {
    let navigate = useNavigate();
    let { mId } = useParams();
    console.log(mId);

    const [tapes, set3MTapes] = useState({
        _id: "",
        materialType: "",
        supplier: "",
        material: "",
        modelNumber: "",
        price: "",
      });

      const [showLoading, setShowLoading] = useState(false);
      const apiUrl = "http://localhost:3000/byId/" + mId;
      const apiUrlUpdate = "http://localhost:3000/materials/" + mId;

      useEffect(() => {
        setShowLoading(false);
        const fetchData = async () => {
          const result = await axios(apiUrl);
          set3MTapes(result.data);
          console.log(result.data);
          setShowLoading(false);
        };
        fetchData();
      }, []);

      const update3MTapes = (e) => {
        setShowLoading(true);
        e.preventDefault();
        const data = {
          materialType: tapes.materialType,
          supplier: tapes.supplier,
          material: tapes.material,
          modelNumber: tapes.modelNumber,
          price: tapes.price,
        };
        axios
          .put(apiUrlUpdate, data)
          .then((result) => {
            console.log("after calling put to update", result.data);
            setShowLoading(false);
            navigate("/list3MTapes");
          })
          .catch((error) => setShowLoading(false));
      };
      const onChange = (e) => {
        e.persist();
        set3MTapes({ ...tapes, [e.target.name]: e.target.value });
      };

  return (
    <div>
      <Jumbotron>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        <Form onSubmit={update3MTapes}>
          <Form.Group className="mb-3">
            <Form.Label>Material Type</Form.Label>
            <Form.Control
              aria-label="Default select example"
              as="select"
              name="materialType"
              id="materialType"
              value={tapes.materialType}
              onChange={onChange}
            >
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
              placeholder="price"
              name="price"
              id="price"
              value={tapes.price}
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Jumbotron>
    </div>
  )
}
