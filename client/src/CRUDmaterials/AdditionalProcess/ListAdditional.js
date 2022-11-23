import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function ListAdditional() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [listError, setListError] = useState(false);

  const apiUrl = "http://localhost:3000/additionals";
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

  const editAdditional = (aId) => {
    navigate("/editAdditional/" + aId);
  };

  const deleteAdditional = (item) => {
    setShowLoading(true);
    const aId = item._id;

    const additional = {
      name: item.name,
      price: item.price,
   
    };

    console.log("Additional Process to delete:", additional);
    const apiUrlDelete = "http://localhost:3000/additionalDelete/" + aId;
    axios
      .delete(apiUrlDelete, additional)
      .then((results) => {
        setShowLoading(false);
        console.log("deleted additional:", results.data);
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
        <h2>See all your Additional Processes here:</h2>
        <ListGroup>
          <Table>
            <thead>
              <tr>
                <th>Additional process name</th>
                <th>price</th>
                <th>Edit Action</th>
                <th>Delete Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name} </td>
                  <td>{item.price} </td>
                  <td>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => {
                        editAdditional(item._id);
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
                        deleteAdditional(item);
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
          <Link to="/createAdditional">
            <Button type="button" variant="secondary">
              Create A New Additional Process
            </Button>
          </Link>
        </div>
      </Jumbotron>
    </div>
  )
}
