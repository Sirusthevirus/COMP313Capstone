import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function CreateStandard() {
  let navigate = useNavigate();
  const [standard, setStandard] = useState({
    _id: "",
    name: "",
    price: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/addStandard";
  const saveStandard = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      name: standard.name,
      price: standard.price,
    };
    //use promises
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate("/listStandard");
      })
      .catch((error) => setShowLoading(false));
  };
  const onChange = (e) => {
    e.persist();
    setStandard({ ...standard, [e.target.name]: e.target.value });
  };
  return (
    <Jumbotron style={{background: 'white'}}>
      <div className="col-11 mt-6" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}}>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Form onSubmit={saveStandard}>
          <Form.Group className="mb-3">
            <Form.Label>Standard Process Material Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Material Name"
              name="name"
              id="name"
              value={standard.name}
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
              value={standard.price}
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
