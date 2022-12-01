import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function EditCoverCoat() {
  let navigate = useNavigate();
  let { mId } = useParams();
  console.log(mId);

  const [coverCoat, setCoverCoat] = useState({
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
      setCoverCoat(result.data);
      console.log(result.data);
      setShowLoading(false);
    };
    fetchData();
  }, []);

  const updateCoverCoat = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      materialType: coverCoat.materialType,
      supplier: coverCoat.supplier,
      material: coverCoat.material,
      thickness: coverCoat.thickness,
      price: coverCoat.price,
    };
    axios
      .put(apiUrlUpdate, data)
      .then((result) => {
        console.log("after calling put to update", result.data);
        setShowLoading(false);
        navigate("/listCoverCoat");
      })
      .catch((error) => setShowLoading(false));
  };

  const onChange = (e) => {
    e.persist();
    setCoverCoat({ ...coverCoat, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Jumbotron>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        <Form onSubmit={updateCoverCoat}>
          <Form.Group className="mb-3">
            <Form.Label>Material Type</Form.Label>
            <Form.Control
              aria-label="Default select example"
              as="select"
              name="materialType"
              id="materialType"
              value={coverCoat.materialType}
              onChange={onChange}
            >
              <option value="Cover Coat">Cover Coat</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              placeholder="supplier"
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
              type="number"
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
              placeholder="price"
              name="price"
              id="price"
              value={coverCoat.price}
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
