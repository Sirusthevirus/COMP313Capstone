import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import '../quote.css'


function Quote(props)
{
  return (
        <Jumbotron>
            <Form style={{display: 'flex'}}>
            <div  className="col-12 mt-3" style={{display: 'inline-block'}}>
            <Form.Group as={Row} className="mb-3">
                <Col sm={4}>
                    <Form.Label>Customer</Form.Label>
                    <Form.Control type="text" placeholder="Customer">
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label>Panel Size</Form.Label>
                    <Form.Control type="text" placeholder="Panel Size">
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label>Exchange Rate</Form.Label>
                    <Form.Control type="text" placeholder="Exchange Rate">
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={4}>
                    <Form.Label>Part Number</Form.Label>
                    <Form.Control type="text" placeholder="Part Number">
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label>Number of Layers</Form.Label>
                    <Form.Control type="text" placeholder="Number of Layers">
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label>Freight</Form.Label>
                    <Form.Control type="text" placeholder="Freight">
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={4}>
                    <Form.Label>Revision</Form.Label>
                    <Form.Control type="text" placeholder="Revision">
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label>Technology</Form.Label>
                    <Form.Control type="text" placeholder="Technology">
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label>Assembly?</Form.Label>
                    <Form.Control type="text" placeholder="Assembly">
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={4}>
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select">
                    <option>Active</option>
                    <option>Inactive</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={4}>
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select">
                    <option>Active</option>
                    <option>Inactive</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            </div>
            {
                //The space below can be used to add a dynamic cost breakdown to the quote form. Change the above div to col-8 instead of col-12
            }
            {
            //<div id='formContainer' className="col-4 mt-5 mb-3" style={{display: 'inline-block', backgroundColor:'white'}}>
            //    <Form.Label>Cost for Manufacturing</Form.Label>
            //    <hr style={{color: "black", height: 5}}/>
            //    <Form.Group as={Row}>
            //        <Col sm={10}>
            //            <Form.Label>Quantity</Form.Label>
            //        </Col>
            //        <Col sm={2}>
            //            <Form.Label>2</Form.Label>
            //        </Col>
            //    </Form.Group>
            //</div>
            }
            </Form>
        </Jumbotron>
  );
}
    

export default withRouter(Quote);