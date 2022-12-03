import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function ListAdditional() {
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
    
      <Jumbotron style={{background: 'white'}}>
      <h2 style={{marginLeft:'2.5em'}}><b>List of Additional Processes:</b></h2>

      <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}}>
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        
        <ListGroup>
        <Table className='table' hover>
        <thead className='table-dark' style={{background: '#111868'}}>
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
              Create New Additional Process
            </Button>
          </Link>
        </div>
        </div>
      </Jumbotron>
    
  );
}
