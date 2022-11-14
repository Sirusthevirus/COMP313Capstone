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


function Processes(props)
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

     /* Console Log*/

    console.log(serviceList);
    console.log(serviceLists);
    console.log(serviceListstiff);
    console.log(serviceListstape);

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



  return (
          <Jumbotron style={{background: 'white'}}>

              <div style={{paddingLeft: '1.5em'}}>
              <h1>Processes</h1>
              &nbsp;&nbsp;
              </div>

              <div >
            <Form > 
               
                <Col>

                <div  style={{ display: 'flex', justifyContent: 'center', paddingLeft: '0.5em', paddingRight: '0.5em', paddingTop: '0.5em', paddingBottom: '0.5em'}}>

                <Row>
                
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label style={{fontWeight: 'bold'}}>Panel Size</Form.Label>
                        <Form.Control name='panel' as="select" >
                            <option> 12x18 </option>
                            <option> 18x24 </option>
                            <option> 16x20 </option>
                            <option> Panel Size from DB</option>
                            
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label style={{fontWeight: 'bold'}}>No. of Layers</Form.Label>
                        <Form.Control name='layers' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label style={{fontWeight: 'bold'}}>Technology</Form.Label>
                        <Form.Control name='tech' as="select" >
                            <option> Technology 1 </option>
                            <option> Technology 2 </option>
                            <option> Technology 3 </option>
                            <option> Technology from DB</option>
                            
                        </Form.Control>
                    </Form.Group>

                    </Row>  
                    </div>          

                </Col>
                </Form>

            </div>


             
            <Form>
                
            

            

            <div  className="col-4 mt-3" style={{display: 'inline block', background: '#A9A9A9', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
            <h4>Dry Film and Wet Process</h4>
            &nbsp;&nbsp;

                {serviceList.map((singleService,index)=>( 
                <Col key={index}>

                    <Col> <h5>Dry Film</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>Dry Film Gold</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>S/M Film</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>CMT (I/L)- Print+Etch</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>CMT (O/L)- Pad+Print+Etch+Pattern</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>CMT (S/M)</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>


                    
                    <Col> <h5>CMT (Finish)</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>


                    <div className=" mt-4">
                    {serviceList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAdd} variant="primary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {serviceList.length > 1 && 
                        <Button onClick={() => handleServiceRemove(index)} variant="primary" type="Delete">
                        Remove
                    </Button> }
                    
                    </div>

                </Col>))}

                </div>

                <Row>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                

            
            
            <div  className="col-4 mt-3" style={{display: 'incline block',  float:'right', background: '#A9A9A9', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
            <h4>Mechanical Process</h4>
            &nbsp;&nbsp;

                {serviceList.map((singleService,index)=>( 
                <Col key={index}>

                    <Col> <h5>Drill Stiffener</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>PTH Stiffener</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>Laser Stiffener (PI)</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>Rout Stiffener</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>Route</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>Score</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>


                    
                    <Col> <h5>Laser Mini</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>

                    <Row></Row>


                    <Col> <h5>Laser (T+B) CVL</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>

                    <Col> <h5>Laser Flex Outline</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>


                    <div className=" mt-4">
                    {serviceList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAdd} variant="primary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {serviceList.length > 1 && 
                        <Button onClick={() => handleServiceRemove(index)} variant="primary" type="Delete">
                        Remove
                    </Button> }
                    
                    </div>

                </Col>))}

                </div>

                </Row>

            </Form>

            <div >

            <Form > 
               
                <Col>

                <div  style={{ display: 'flex', justifyContent: 'center', paddingLeft: '0.5em', paddingRight: '0.5em', paddingTop: '0.5em', paddingBottom: '0.5em'}}>

                <Row>
                
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label style={{fontWeight: 'bold'}}>Exchange Rate</Form.Label>
                        <Form.Control type="text" placeholder="ex. 1.75">
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label style={{fontWeight: 'bold'}}>Freight</Form.Label>
                        <Form.Control name='layers' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label style={{fontWeight: 'bold'}}>Assembly</Form.Label>
                        <Form.Control type='text' placeholder='Assembly'>
   
                        </Form.Control>
                    </Form.Group>

                    </Row>  
                    </div>          

                </Col>
                </Form>

            </div>

            <Form style={{display: 'flex'}}>

                

                <Form>

                <Row>
            
            
            <div  className="col-11 mt-3" style={{display: 'flex:5', float: 'right', background: '#A9A9A9', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
            &nbsp;&nbsp;

                {serviceList.map((singleService,index)=>( 
                <Col key={index}>

                    <Col> <h5>FINISH</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>

                    <Col> <h5>Gold Fingers</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>
                    </Row>

                    <div className=" mt-4">
                    {serviceList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAdd} variant="primary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {serviceList.length > 1 && 
                        <Button onClick={() => handleServiceRemove(index)} variant="primary" type="Delete">
                        Remove
                    </Button> }
                    
                    </div>

                </Col>))}

                </div>

                </Row>

                </Form>

                <Form>
                <Row>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                

            
            
            <div  className="col-10 mt-3" style={{display: 'incline block',  float:'right', background: '#A9A9A9', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
            <h4>Standard Process</h4>
            &nbsp;&nbsp;

                {serviceList.map((singleService,index)=>( 
                <Col key={index}>

                    <Col> <h5>Mechanical Drill</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>Laser Drill</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>Plasma (PI)</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>Press</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>Silver Sield</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>



                    <Col> <h5>SilkScreen</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>


                    
                    <Col> <h5>Test</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>

                    <Row></Row>


                    <Col> <h5>Labour</h5></Col>
                    <Row style={{paddingLeft: '1.5em'}}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Used</Form.Label>  
                        <Form.Control name='used' type="number" placeholder='0'>
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group as={Col} className="mb-3"> 
                    <Form.Label>Cost $</Form.Label> 
                        <Form.Control type="text" placeholder='$12'>
                        </Form.Control>
                    </Form.Group>

                    </Row>

                    <div className=" mt-4">
                    {serviceList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAdd} variant="primary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {serviceList.length > 1 && 
                        <Button onClick={() => handleServiceRemove(index)} variant="primary" type="Delete">
                        Remove
                    </Button> }
                    
                    </div>

                </Col>))}

                </div>

                </Row>
                </Form>

                

                

            </Form>
            

           ==============================================================================================================================================
           
           

          </Jumbotron>

          
     
        /* <Jumbotron>
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
        </Jumbotron> */
  );
}
    

export default withRouter(Processes);