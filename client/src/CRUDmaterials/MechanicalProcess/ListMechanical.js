import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";


export default function ListMechanical() {
    const [data, setData] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [listError, setListError] = useState(false);

    const apiUrl = "http://localhost:3000/mechanicals";
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

      const deleteMechanical = (item) => {
        setShowLoading(true);
        const meId = item._id;
    
        const mechanical = {
          name: item.name,
          price: item.price,
        };
    
        console.log("Mechanical Process to delete:", mechanical);
        const apiUrlDelete = "http://localhost:3000/mechanicalById/" + meId;
        axios
          .delete(apiUrlDelete, mechanical)
          .then((results) => {
            setShowLoading(false);
            console.log("deleted mechanical:", results.data);
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
        <h2>See all your Mechanical Processes here:</h2>
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
                        deleteMechanical(item);
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
          <Link to="/createMechanical">
            <Button type="button" variant="secondary">
              Create A New Mechanical Process
            </Button>
          </Link>
        </div>
      </Jumbotron>
    </div>
  )
}
