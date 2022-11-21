import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

export default function ListMaterial() {

    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [listError, setListError] = useState(false);

    const apiUrl = "http://localhost:3000/materials";
    const fetchData = async () => {
        axios.get(apiUrl)
          .then(result => {
            console.log('result.data:',result.data)
            setData(result.data);
            setShowLoading(false);
            
          }).catch((error) => {
            console.log('error in fetchData:', error)
            setListError(true)
          });
        }; 

        useEffect(() => {
   
            fetchData();
          }, []);

          const editMaterial = (mId) => {
            navigate('/editMateiral/' + mId);
          }

          const deleteMaterial = (item) => {
            setShowLoading(true);
            const mId=item._id;
            const material = {
                materialType: item.materialType, 
                supplier: item.supplier,
                material: item.material,
                code: item.code,
                numberOfUse: item.numberOfUse,
                price: item.price
             };
            console.log('task to delete:', material)
            //
            const apiUrlDelete = "http://localhost:3000/materials/" + mId;
            console.log('url:',apiUrlDelete)
            //
            axios.delete(apiUrlDelete, material)
              .then((results) => {
                setShowLoading(false);
                console.log('deleted document:', results.data)
                //refresh the list
                fetchData()
                //navigate('/list')
              }).catch((error) => setShowLoading(false));
          };

          const showDetail = (mId) => {
            //
            navigate('/showMaterial/' + mId);
          }

  return (
    <div>
        {showLoading && <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> }

        <h2>See all your Materials here:</h2>
          <ListGroup>
            <Table>
            <tbody>
              {data.map((item, idx) => (
                
                  <tr key={idx}>
                  <td>{idx+1}</td>
                  <td><ListGroup.Item key={idx} action onClick={() => { showDetail(item._id) }}>{item.materialType} </ListGroup.Item></td>
                  <td><ListGroup.Item key={idx} action onClick={() => { showDetail(item._id) }}>{item.supplier} </ListGroup.Item></td>
                  <td><ListGroup.Item key={idx} action onClick={() => { showDetail(item._id) }}>{item.material} </ListGroup.Item></td>
                  <td><ListGroup.Item key={idx} action onClick={() => { showDetail(item._id) }}>{item.code} </ListGroup.Item></td>
                  <td><ListGroup.Item key={idx} action onClick={() => { showDetail(item._id) }}>{item.numberOfUse} </ListGroup.Item></td>
                  <td><ListGroup.Item key={idx} action onClick={() => { showDetail(item._id) }}>{item.price} </ListGroup.Item></td>
                  <td><Button type="button" variant="primary" onClick={() => { editMaterial(item._id) }}>Edit</Button></td>
                  <td><Button type="button" variant="danger" onClick={() => { deleteMaterial(item) }}>Delete</Button></td>
                  </tr>                
              ))}
              </tbody>
            </Table>
          </ListGroup>
    </div>
  )
}
