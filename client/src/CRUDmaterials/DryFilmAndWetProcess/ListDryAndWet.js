import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function ListDryAndWet() {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [listError, setListError] = useState(false);

  const apiUrl = "http://localhost:3000/DryAndWets";
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

  const deleteDryAndWet = (item) => {
    setShowLoading(true);
    const dId = item._id;

    const dryAndWet = {
      name: item.name,
      price: item.price,
    };

    console.log("DryAndWet Process to delete:", dryAndWet);
    const apiUrlDelete = "http://localhost:3000/DryAndWetsDelete/" + dId;
    axios
      .delete(apiUrlDelete, dryAndWet)
      .then((results) => {
        setShowLoading(false);
        console.log("deleted DryAndWet:", results.data);
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
        <h2>See all your Dry Film & Wet Processes here:</h2>
        <ListGroup>
          <Table>
            <thead>
              <tr>
                <th>Material Name</th>
                <th>Price</th>
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
                      variant="warning"
                      onClick={() => {
                        deleteDryAndWet(item);
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
          <Link to="/createDryAndWet">
            <Button type="button" variant="secondary">
              Create A New Dry Film & Wet Process
            </Button>
          </Link>
        </div>
      </Jumbotron>
    </div>
  );
}
