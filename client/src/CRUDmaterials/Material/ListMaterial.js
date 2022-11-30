import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function ListMaterial() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [listError, setListError] = useState(false);

  const apiUrl = "http://localhost:3000/materials";
  const fetchData = async () => {
    axios
      .get(apiUrl)
      .then((result) => {
        console.log("result.data:", result.data);
        setData(result.data);
        setShowLoading(false);
      })
      .catch((error) => {
        console.log("error in fetchData:", error);
        setListError(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const editMaterial = (id) => {
    navigate("/editMaterial/" + id);
  };

  const deleteMaterial = (item) => {
    setShowLoading(true);
    const mId = item._id;

    const material = {
      materialType: item.materialType,
      supplier: item.supplier,
      material: item.material,
      code: item.code,
      price: item.price,
    };

    console.log("material to delete:", material);
    const apiUrlDelete = "http://localhost:3000/materials/" + mId;
    axios
      .delete(apiUrlDelete, material)
      .then((results) => {
        setShowLoading(false);
        console.log("deleted material:", results.data);
        fetchData();
      })
      .catch((error) => setShowLoading(false));
  };

  return (
    <div>
      <Jumbotron>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <h2>See all your Materials here:</h2>
        <ListGroup>
          <Table>
            <thead>
              <tr>
                <th>Material Type</th>
                <th>Supplier</th>
                <th>Material Name</th>
                <th>Code</th>
                <th>Price</th>
                <th>Edit Action</th>
                <th>Delete Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.materialType} </td>
                  <td>{item.supplier} </td>
                  <td>{item.material} </td>
                  <td>{item.code} </td>
                  <td>{item.price} </td>
                  <td>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => {
                        editMaterial(item._id);
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      type="button"
                      variant="warning"
                      onClick={() => {
                        deleteMaterial(item);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ListGroup>
        <div className="buttonStyle">
          <Link to="/createMaterial">
            <Button type="button" variant="secondary">
              Create A New Material
            </Button>
          </Link>
        </div>
      </Jumbotron>
    </div>
  );
}
