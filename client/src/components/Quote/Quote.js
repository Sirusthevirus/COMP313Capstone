import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { withRouter } from 'react-router-dom';
import '../../quote.css'
import axios from 'axios';


function Quote(props)
{
        /* Service List*/
        const [serviceList, setServiceList] = useState([
            {supplier: "", material: "", weight: "", used: ""},
            
        ]);
    
        const [serviceLists, setServiceLists] = useState([
            {supplier: "", material: "", thinkness: "", used: ""},
            
        ]);
    
        const [serviceListstiff, setServiceListstiff] = useState([
            {supplier: "", material: "", thinkness: "", used: ""},
            
        ]);
    
        const [serviceListstape, setServiceListstape] = useState([
            {supplier: "", material: "", thinkness: "", used: ""},
            
        ]);
    
         /* Add Button*/
    
        const handleServiceAdd = () => {
            setServiceList([...serviceList, {supplier: "", material: "", weight: "", used: ""}]);
    
        };
    
        const handleServiceAddO = () => {
            setServiceLists([...serviceLists, {supplier: "", material: "", thinkness: "", used: ""}]);
    
        };
    
        const handleServiceAddT = () => {
            setServiceListstiff([...serviceListstiff, {supplier: "", material: "", thinkness: "", used: ""}]);
    
        };
    
        const handleServiceAddTape = () => {
            setServiceListstape([...serviceListstape, {supplier: "", material: "", thinkness: "", used: ""}]);
    
        };
    
         /* Remove Button*/
    
        const handleServiceRemove = (index) => {
            const list = [...serviceList]
            list.splice(index, 1);
            setServiceList(list)
        };
    
        const handleServiceRemoveO = (index) => {
            const list = [...serviceLists]
            list.splice(index, 1);
            setServiceLists(list)
        };
    
        const handleServiceRemoveT = (index) => {
            const list = [...serviceListstiff]
            list.splice(index, 1);
            setServiceListstiff(list)
        };
    
        const handleServiceRemoveTape = (index) => {
            const list = [...serviceListstape]
            list.splice(index, 1);
            setServiceListstape(list)
        };
    
         /* Output*/
    
        const handleServiceChange = (e, index) => {
            const {name, value} = e.target
            const list = [...serviceList];
            list[index][name] = value;
            setServiceList(list)
    
        };
    
        const handleServiceChangeO = (e, index) => {
            const {name, value} = e.target
            const list = [...serviceLists];
            list[index][name] = value;
            setServiceLists(list)
    
        };
    
        const handleServiceChangeT = (e, index) => {
            const {name, value} = e.target
            const list = [...serviceListstiff];
            list[index][name] = value;
            setServiceListstiff(list)
    
        };
    
        const handleServiceChangeTape = (e, index) => {
            const {name, value} = e.target
            const list = [...serviceListstape];
            list[index][name] = value;
            setServiceListstape(list)
    
        };

        const [optionList, setOptionList] = useState([]);
        const fetchLaminateData = () => {
            axios
              .get("http://localhost:5000/specificMaterial/Laminate Material")
              .then((response) => {
                const { data } = response;
                if(response.status === 200){
                    //check the api call is success by stats code 200,201 ...etc
                    setOptionList(data)
                    console.log(data)
                }else{
                    //error handle section 
                }
              })
              .catch((error) => console.log(error));
          };

        useEffect(() => {
            fetchLaminateData();
          }, []);
        
  return (
        <Jumbotron style={{background: 'white'}}>

            <h2 style={{marginLeft:'2.5em'}}><b>Create Quote</b></h2>
            <Form style={{display: 'flex'}}>
            <div  className="col-12 mt-3" style={{display: 'inline-block'}}>

                <div style={{display:'flex', justifyContent: 'center'}}>
            <Form.Group as={Row} className="mb-3">
                <Col sm={4}>
                    <Form.Label> <b>Customer</b></Form.Label>
                    <Form.Control type="text" >
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label><b>Panel Size</b></Form.Label>
                    <Form.Control type="text">
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label><b>Exchange Rate</b></Form.Label>
                    <Form.Control type="text" >
                    </Form.Control>
                </Col>
            </Form.Group>
            </div>

            <div style={{display:'flex', justifyContent: 'center'}}>
            <Form.Group as={Row} className="mb-3">
                <Col sm={4}>
                    <Form.Label><b>Part Number</b></Form.Label>
                    <Form.Control type="text" >
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label><b>Number of Layers</b></Form.Label>
                    <Form.Control type="text" >
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label><b>Freight</b></Form.Label>
                    <Form.Control type="text" >
                    </Form.Control>
                </Col>
            </Form.Group>
            </div>

            <div style={{display:'flex', justifyContent: 'center'}}>
            <Form.Group as={Row} className="mb-3">
                <Col sm={4}>
                    <Form.Label><b>Revision</b></Form.Label>
                    <Form.Control type="text" >
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label><b>Technology</b></Form.Label>
                    <Form.Control type="text" >
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Label><b>Assembly</b></Form.Label>
                    <Form.Control type="text" >
                    </Form.Control>
                </Col>
            </Form.Group>
            </div>
            
            &nbsp;
            &nbsp;

            <h3 style={{marginLeft:'2.5em'}}><b>Manufacturing</b></h3>
                <div className="col-11 mt-6" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Laminate Material</h4>
                    {serviceList.map((singleService,index)=>( 
                    <Row key={index}>
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Supplier</Form.Label>
                            <Form.Control name='supplier' as="select">
                            {optionList.map((d) => (
                                <option key={d.id} value={d.id}>{d.supplier}</option>
                                ))}
                            </Form.Control>              
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Material</Form.Label>
                            <Form.Control name='material' as="select">
                            {optionList.map((d) => (
                                <option key={d.id} value={d.id}>{d.material}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>CU Weight</Form.Label>
                            <Form.Control name='weight' as="select">
                            {optionList.map((d) => (
                                <option key={d.id} value={d.id}>{d.cuWeight}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Used</Form.Label>
                            <Form.Control name='used' type="number" placeholder='0'
                            value={singleService.service}
                            onChange = {(e) => handleServiceChange(e, index)}>
                            </Form.Control>
                        </Form.Group>
                        <div className=" mt-4">
                        {serviceList.length-1 === index &&
                        <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAdd} variant="secondary" type="Input">
                            Add
                        </Button> }
                        </div>
                        &nbsp;&nbsp;
                        <div className="mt-4">
                            {serviceList.length > 1 && 
                            <Button onClick={() => handleServiceRemove(index)} variant="secondary" type="Delete">
                            Remove
                        </Button> }
                        </div>
                    </Row>))}
                </div>
                <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
            <h4>Cover Coat</h4>
                {serviceLists.map((singleServices,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServices.service}
                        onChange = {(e) => handleServiceChangeO(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServices.service}
                        onChange = {(e) => handleServiceChangeO(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Thickness</Form.Label>
                        <Form.Control name='thickness' as="select"
                        value={singleServices.service}
                        onChange = {(e) => handleServiceChangeO(e, index)}>
                            <option> 0.25 oz</option>
                            <option> Weights from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServices.service}
                        onChange = {(e) => handleServiceChangeO(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {serviceLists.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAddO} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;
                    <div className="mt-4">
                        {serviceLists.length > 1 && 
                        <Button onClick={() => handleServiceRemoveO(index)} variant="secondary" type="Delete">
                        Remove
                    </Button> }
                    </div>
                </Row>))}
                </div>

                <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Stiffener</h4>
                {serviceListstiff.map((singleServicestiff,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestiff.service}
                        onChange = {(e) => handleServiceChangeT(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestiff.service}
                        onChange = {(e) => handleServiceChangeT(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Thickness</Form.Label>
                        <Form.Control name='thickness' as="select"
                        value={singleServicestiff.service}
                        onChange = {(e) => handleServiceChangeT(e, index)}>
                            <option> 0.25 oz</option>
                            <option> Weights from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestiff.service}
                        onChange = {(e) => handleServiceChangeT(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {serviceListstiff.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAddT} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {serviceListstiff.length > 1 && 
                        <Button onClick={() => handleServiceRemoveT(index)} variant="secondary" type="Delete">
                        Remove
                    </Button> }
                    </div>
                </Row>))}
                </div>

                <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>3M Tape</h4>
                {serviceListstape.map((singleServicestape,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Model # </Form.Label>
                        <Form.Control name='thickness' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> 587342</option>
                            <option> Model# from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {serviceListstape.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAddTape} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;                   
                </Row>))}
                </div>
                
                <div className="col-11 mt-6" style={{display: 'inline-block', marginLeft:'4em', background: 'white', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} ></div>

            <h3 style={{marginLeft:'2.5em'}}><b>Processes</b></h3>

            <div className="col-11 mt-6" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Dry Film & Wet Processes</h4>
                {serviceListstape.map((singleServicestape,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {serviceListstape.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAddTape} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;                   
                </Row>))}
                </div>

                <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Mechanical Processes</h4>
                {serviceListstape.map((singleServicestape,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {serviceListstape.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAddTape} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;                   
                </Row>))}
                </div>

               <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Standard Processes</h4>
                {serviceListstape.map((singleServicestape,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {serviceListstape.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAddTape} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;                   
                </Row>))}
                </div>

                <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background:'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Finishes</h4>
                {serviceListstape.map((singleServicestape,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestape.service}
                        onChange = {(e) => handleServiceChangeTape(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {serviceListstape.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAddTape} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;                   
                </Row>))}
                </div>

                <div className="col-12 mt-3" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button style={{width:"100px", height:"50px"}}  variant="secondary" type="Submit">
                
                        Submit
                        
                    </Button>
            </div>
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
    

export default Quote;