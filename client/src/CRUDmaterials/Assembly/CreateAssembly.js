import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function CreateAssembly() {
  let navigate = useNavigate();
  const [assembly, setassembly] = useState({
    _id: "",

    type: "",
    cost: "",
    margin: "",
    minutes: "",
    IORatio: "",
  });

  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/addAssembly";

  const saveAssembly = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      type: assembly.type,
      cost: assembly.cost,
      margin: assembly.margin,
      minutes: assembly.minutes,
      IORatio: assembly.IORatio,
    };
    //use promises
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate("/listAssembly");
      })
      .catch((error) => setShowLoading(false));
  };

  const onChange = (e) => {
    e.persist();
    setassembly({ ...assembly, [e.target.name]: e.target.value });
  };
  return (
    <Jumbotron>
      <div>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Form onSubmit={saveAssembly}>
          <Form.Group className="mb-3">
            <Form.Label>Assembly Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Assembly Type"
              name="type"
              id="type"
              value={assembly.type}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cost</Form.Label>
            <Form.Control
              type="number"
              placeholder="Cost"
              name="cost"
              id="cost"
              value={assembly.cost}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Margin</Form.Label>
            <Form.Control
              type="number"
              placeholder="Margin"
              name="margin"
              id="margin"
              value={assembly.margin}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Minutes</Form.Label>
            <Form.Control
              type="number"
              placeholder="Minutes"
              name="minutes"
              id="minutes"
              value={assembly.minutes}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>IORatio</Form.Label>
            <Form.Control
              type="number"
              placeholder="IORatio"
              name="IORatio"
              id="IORatio"
              value={assembly.IORatio}
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
