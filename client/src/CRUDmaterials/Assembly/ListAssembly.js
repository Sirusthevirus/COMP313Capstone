import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function ListAssembly() {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [listError, setListError] = useState(false);

  const apiUrl = "http://localhost:3000/Assemblies";
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

  const deleteAssembly = (item) => {
    setShowLoading(true);
    const asId = item._id;

    const assembly = {
      type: item.type,
      cost: item.cost,
      margin: item.margin,
      minutes: item.minutes,
      IORatio: item.IORatio,
    };

    console.log("Assembly to delete:", assembly);
    const apiUrlDelete = "http://localhost:3000/AssemblyDelete/" + asId;
    axios
      .delete(apiUrlDelete, assembly)
      .then((results) => {
        setShowLoading(false);
        console.log("deleted assembly:", results.data);
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
        <h2>See all your Assemblies here:</h2>
        <ListGroup>
          <Table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Cost</th>
                <th>Margin</th>
                <th>Minutes</th>
                <th>IORatio</th>
                <th>Delete Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.type} </td>
                  <td>{item.cost} </td>
                  <td>{item.margin} </td>
                  <td>{item.minutes} </td>
                  <td>{item.IORatio} </td>
                  <td>
                    <Button
                      type="button"
                      variant="warning"
                      onClick={() => {
                        deleteAssembly(item);
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
          <Link to="/createAssembly">
            <Button type="button" variant="secondary">
              Create A New Assembly
            </Button>
          </Link>
        </div>
      </Jumbotron>
    </div>
  );
}