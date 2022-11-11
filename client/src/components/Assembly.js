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


function Assembly(props)
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
            </div>
            </Form>
        </Jumbotron>
  );
}
    

export default withRouter(Assembly);