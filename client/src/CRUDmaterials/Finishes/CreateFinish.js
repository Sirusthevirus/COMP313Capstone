import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function CreateFinish() {
    let navigate = useNavigate();
  const [finish, setFinish] = useState({
    _id: "",
    name: "",
    price: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/addFinish";
  const saveFinish = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      name: finish.name,
      price: finish.price,
    };
    //use promises
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate("/listFinish");
      })
      .catch((error) => setShowLoading(false));
  };
  const onChange = (e) => {
    e.persist();
    setFinish({ ...finish, [e.target.name]: e.target.value });
  };
  return (
    <Jumbotron style={{background: 'white'}}>
    <div className="col-11 mt-6" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}}>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <Form onSubmit={saveFinish}>
        <Form.Group className="mb-3">
          <Form.Label>Finish Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Finish Name"
            name="name"
            id="name"
            value={finish.name}
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
            value={finish.price}
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  </Jumbotron>
  )
}
