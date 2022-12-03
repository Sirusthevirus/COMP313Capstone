import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function CreateCoverCoat() {
  let navigate = useNavigate();
  const [coverCoat, setCoverCoat] = useState({
    materialType: "",
    supplier: "",
    material: "",
    thickness: "",
    price: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/addMaterial";
  const saveCoverCoat = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      materialType: coverCoat.materialType,
      supplier: coverCoat.supplier,
      material: coverCoat.material,
      thickness: coverCoat.thickness,
      price: coverCoat.price,
    };
    //use promises
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate("/listCoverCoat");
      })
      .catch((error) => setShowLoading(false));
  };
  // handles onChange event
  const onChange = (e) => {
    e.persist();
    setCoverCoat({ ...coverCoat, [e.target.name]: e.target.value });
  };

  return (
    <Jumbotron style={{background: 'white'}}>
      <div className="col-11 mt-6" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}}>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Form onSubmit={saveCoverCoat}>
          <Form.Group className="mb-3">
            <Form.Label>Material Type</Form.Label>
            <Form.Control
              as="select"
              name="materialType"
              id="materialType"
              value={coverCoat.materialType}
              onChange={onChange}
            >
              <option>Select . . .</option>
              <option value="Cover Coat">Cover Coat</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              placeholder="Supplier"
              name="supplier"
              id="supplier"
              value={coverCoat.supplier}
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
              value={coverCoat.material}
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
              value={coverCoat.thickness}
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
              value={coverCoat.price}
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </Jumbotron>
  );
}
