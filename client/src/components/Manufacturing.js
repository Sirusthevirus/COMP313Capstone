import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { withRouter } from 'react-router-dom';
import '../quote.css'


function Manufacturing(props)
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
              <h1>Manufacturing</h1>
              &nbsp;&nbsp;
              </div>

              <div >
            <Form > 
               
                <Col>

                <div  style={{ display: 'flex', justifyContent: 'center',  float: 'center', paddingLeft: '0.5em', paddingRight: '0.5em', paddingTop: '0.5em', paddingBottom: '0.5em'}}>

                <Row>
                
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label style={{fontWeight: 'bold'}}>Customer</Form.Label>
                        <Form.Control type="text" placeholder="Customer Name"> 
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label style={{fontWeight: 'bold'}}>Part Number</Form.Label>
                        <Form.Control type="text" placeholder="295684">
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label style={{fontWeight: 'bold'}}>Revision</Form.Label>
                        <Form.Control type="text" placeholder="Revision #">
                        </Form.Control>
                    </Form.Group>

                    </Row>  
                    </div>          

                </Col>
                </Form>

            </div>


              <div style={{float: 'flex'}}>

            <Form style={{display: 'flex'}}>
            <Col>
            
            
            <div  className="col-11 mt-3" style={{display: 'inline-block', background: '#A9A9A9', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
            <h4>Laminate Material</h4>

                {serviceList.map((singleService,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleService.service}
                        onChange = {(e) => handleServiceChange(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                            
                        </Form.Control>
                        
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleService.service}
                        onChange = {(e) => handleServiceChange(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>CU Weight</Form.Label>
                        <Form.Control name='weight' as="select"
                        value={singleService.service}
                        onChange = {(e) => handleServiceChange(e, index)}>
                            <option> 0.25 oz</option>
                            <option> Weights from DB</option>
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

                </Row>))}

                </div>

                </Col>

            </Form>

            <Form style={{display: 'flex'}}>
            <Col>
            
            
            <div  className="col-11 mt-3" style={{display: 'inline-block', background: '#A9A9A9', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
            <h4>Coat Cover</h4>

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
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAddO} variant="primary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {serviceLists.length > 1 && 
                        <Button onClick={() => handleServiceRemoveO(index)} variant="primary" type="Delete">
                        Remove
                    </Button> }
                    
                    </div>

                </Row>))}
                </div>

                </Col>
            </Form>


            <Form style={{display: 'flex'}}>
            <Col>
            
            
            <div  className="col-11 mt-3" style={{display: 'inline-block', background: '#A9A9A9', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
            <h4>Coat Cover</h4>

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
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAddT} variant="primary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {serviceListstiff.length > 1 && 
                        <Button onClick={() => handleServiceRemoveT(index)} variant="primary" type="Delete">
                        Remove
                    </Button> }
                    
                    </div>

                    

                </Row>))}

               
                </div>

                </Col>

            </Form>

            <Form style={{display: 'flex'}}>
            <Col>
            
            
            <div  className="col-11 mt-3" style={{display: 'inline-block', background: '#A9A9A9', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
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
                     <Button style={{width:"90px", height:"38px"}} onClick={handleServiceAddTape} variant="primary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {serviceListstape.length > 1 && 
                        <Button onClick={() => handleServiceRemoveTape(index)} variant="primary" type="Delete">
                        Remove
                    </Button> }
                    
                    </div>

                    

                </Row>))}

               
                </div>

                </Col>

            </Form>

            
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button style={{width:"100px", height:"50px"}}  variant="primary" type="Submit">
                
                        NEXT
                        
                    </Button>
            </div>

            </div>
            
            &nbsp;&nbsp;

           

            {/* <div >
                <h1>Output</h1>
                {serviceList.map((singleService, index) => (
                    <ul key={index}>
                            {singleService.service && <li>{singleService.service}</li>}
                    </ul>
                    ))
                }

                 {serviceLists.map((singleServices, index) => (
                    <ul key={index}>
                            {singleServices.service && <li>{singleServices.service}</li>}
                    </ul>
                    ))
                }

                {serviceListstiff.map((singleServicestiff, index) => (
                    <ul key={index}>
                            {singleServicestiff.service && <li>{singleServicestiff.service}</li>}
                    </ul>
                    ))
                }   

                {serviceListstape.map((singleServicestape, index) => (
                    <ul key={index}>
                            {singleServicestape.service && <li>{singleServicestape.service}</li>}
                    </ul>
                    ))
                }   
                
            </div> */}

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
    

export default Manufacturing;