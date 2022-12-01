import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function ListLaminate() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [listError, setListError] = useState(false);
  const apiUrl = "http://localhost:3000/materials";
  const fetchData = async () => {
    axios
      .get(apiUrl)
      .then((result) => {
        setData(result.data);
        setShowLoading(false);
        console.log(result.data);
      })
      .catch((error) => {
        console.log("error in fetchData:", error);
        setListError(true);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const editLaminate = (id) => {
    navigate("/editLaminate/" + id);
  };
  const deleteLaminate = (item) => {
    setShowLoading(true);
    const mId = item._id;
    const laminate = {
      materialType: item.materialType,
      supplier: item.supplier,
      material: item.material,
      cuWeight: item.cuWeight,
      price: item.price,
    };
    console.log("Laminate to delete:", laminate);
    const apiUrlDelete = "http://localhost:3000/materials/" + mId;
    axios
      .delete(apiUrlDelete, laminate)
      .then((results) => {
        setShowLoading(false);
        console.log("deleted laminate:", results.data);
        fetchData();
      })
      .catch((error) => setShowLoading(false));
  };
  const laminate = data.filter((la) => la.materialType === "Laminate Material");
  return (
    <div>
      <Jumbotron>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <h2>See all your Laminate Materials here:</h2>

        <ListGroup>
          <Table>
            <thead>
              <tr>
                <th>Material Type</th>
                <th>Supplier</th>
                <th>Material Name</th>
                <th>Cu Weight</th>
                <th>Price</th>
                <th>Edit Action</th>
                <th>Delete Action</th>
              </tr>
            </thead>
            <tbody>
              {laminate.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.materialType} </td>
                  <td>{item.supplier} </td>
                  <td>{item.material} </td>
                  <td>{item.cuWeight} </td>
                  <td>{item.price} </td>
                  <td>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => {
                        editLaminate(item._id);
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
                        deleteLaminate(item);
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
          <Link to="/createLaminate">
            <Button type="button" variant="secondary">
              Create A New Laminate Material
            </Button>
          </Link>
        </div>
      </Jumbotron>
    </div>
  );
}
