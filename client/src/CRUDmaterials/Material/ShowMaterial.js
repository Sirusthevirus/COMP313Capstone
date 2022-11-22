import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowMaterial() {
  let navigate = useNavigate();
  let { mId } = useParams();
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:3000/byId/" + mId;
  const apiUrlDelete = "http://localhost:3000/materials/ " + mId;
  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      setShowLoading(false);
    };
    fetchData();
  }, []);

  const editMaterial = (id) => {
    navigate("/editMateiral/" + id);
  };

  const deleteMaterial = (item) => {
    setShowLoading(true);
    const material = {
      materialType: item.materialType,
      supplier: item.supplier,
      material: item.material,
      code: item.code,
      numberOfUse: item.numberOfUse,
      price: item.price,
    };
    axios
      .delete(apiUrlDelete, material)
      .then((results) => {
        setShowLoading(false);
        navigate("/listMaterial");
      })
      .catch((error) => setShowLoading(false));
  };

  return (
    <div>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <Table>
        <thead>
          <tr>
            <th>materialType</th>
            <th>supplier</th>
            <th>material</th>
            <th>code</th>
            <th>numberOfUse</th>
            <th>price</th>
            <th>action</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.materialType}</td>
            <td>{data.supplier}</td>
            <td>{data.material}</td>
            <td>{data.code}</td>
            <td>{data.numberOfUse}</td>
            <td>{data.price}</td>
            <td>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  editMaterial(data._id);
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
                  deleteMaterial(data._id);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
