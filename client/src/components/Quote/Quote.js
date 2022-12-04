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
        const [laminateList, setLaminateMaterial] = useState([
            {supplier: "", material: "", weight: "", used: ""},
            
        ]);
    
        const [coverCoatList, setCoverCoat] = useState([
            {supplier: "", material: "", thinkness: "", used: ""},
            
        ]);
    
        const [stiffenerList, setStiffener] = useState([
            {supplier: "", material: "", thinkness: "", used: ""},
            
        ]);
    
        const [tapeList, set3MTape] = useState([
            {supplier: "", material: "", thinkness: "", used: ""},
            
        ]);

        const [dryFilmList, setDryFilm] = useState([
            {supplier: "", material: "", thinkness: "", used: ""},
            
        ]);

        const [mechanicalProcessList, setMechanicalProcess] = useState([
            {supplier: "", material: "", thinkness: "", used: ""},
            
        ]);

        const [standardProcessList, setStandardProcess] = useState([
            {supplier: "", material: "", thinkness: "", used: ""},
            
        ]);

        const [finishesList, setFinishes] = useState([
            {supplier: "", material: "", thinkness: "", used: ""},
            
        ]);
    
         /* Add Button*/
    
        const addLaminate = () => {
            setLaminateMaterial([...laminateList, {supplier: "", material: "", weight: "", used: ""}]);
    
        };
    
        const addCoverCoat = () => {
            setCoverCoat([...coverCoatList, {supplier: "", material: "", thinkness: "", used: ""}]);
    
        };
    
        const addStiffener = () => {
            setStiffener([...stiffenerList, {supplier: "", material: "", thinkness: "", used: ""}]);
    
        };
    
        const add3MTape = () => {
            set3MTape([...tapeList, {supplier: "", material: "", thinkness: "", used: ""}]);
    
        };

        const addDryFilm = () => {
            setDryFilm([...dryFilmList, {supplier: "", material: "", used: ""}]);
    
        };

        const addMechanicalProcess = () => {
            setMechanicalProcess([...mechanicalProcessList, {supplier: "", material: "", used: ""}]);
    
        };

        const addStandardProcess = () => {
            setStandardProcess([...standardProcessList, {supplier: "", material: "", used: ""}]);
    
        };

        const addFinishes = () => {
            setFinishes([...finishesList, {supplier: "", material: "", used: ""}]);
    
        };
    
         /* Remove Button*/
    
        const removeLaminate = (index) => {
            const list = [...laminateList]
            list.splice(index, 1);
            setLaminateMaterial(list)
        };
    
        const removeCoverCoat = (index) => {
            const list = [...coverCoatList]
            list.splice(index, 1);
            setCoverCoat(list)
        };
    
        const removeStiffener = (index) => {
            const list = [...stiffenerList]
            list.splice(index, 1);
            setStiffener(list)
        };
    
        const remove3MTape = (index) => {
            const list = [...tapeList]
            list.splice(index, 1);
            set3MTape(list)
        };
    
        const removeDryFilm = (index) => {
            const list = [...dryFilmList]
            list.splice(index, 1);
            setDryFilm(list)
        };

        const removeMechanicalProcess = (index) => {
            const list = [...mechanicalProcessList]
            list.splice(index, 1);
            setMechanicalProcess(list)
        };

        const removeStandardProcess = (index) => {
            const list = [...standardProcessList]
            list.splice(index, 1);
            setStandardProcess(list)
        };

        const removeFinishes = (index) => {
            const list = [...finishesList]
            list.splice(index, 1);
            setFinishes(list)
        };
        
        
         /* Output*/
    
        const handleLaminateChange = (e, index) => {
            const {name, value} = e.target
            const list = [...laminateList];
            list[index][name] = value;
            setLaminateMaterial(list)
    
        };
    
        const handleCoverCoatChange = (e, index) => {
            const {name, value} = e.target
            const list = [...coverCoatList];
            list[index][name] = value;
            setCoverCoat(list)
    
        };
    
        const handleStiffenerChange = (e, index) => {
            const {name, value} = e.target
            const list = [...stiffenerList];
            list[index][name] = value;
            setStiffener(list)
    
        };
    
        const handle3MTapeChange = (e, index) => {
            const {name, value} = e.target
            const list = [...tapeList];
            list[index][name] = value;
            set3MTape(list)
    
        };

        const handleDryFilmChange = (e, index) => {
            const {name, value} = e.target
            const list = [...dryFilmList];
            list[index][name] = value;
            setDryFilm(list)
    
        };

        const handleMechanicalChange = (e, index) => {
            const {name, value} = e.target
            const list = [...mechanicalProcessList];
            list[index][name] = value;
            setMechanicalProcess(list)
    
        };

        const handleStandardChange = (e, index) => {
            const {name, value} = e.target
            const list = [...standardProcessList];
            list[index][name] = value;
            setStandardProcess(list)
    
        };

        const handleFinishesChange = (e, index) => {
            const {name, value} = e.target
            const list = [...finishesList];
            list[index][name] = value;
            setFinishes(list)
    
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
                    {laminateList.map((singleService,index)=>( 
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
                            onChange = {(e) => handleLaminateChange(e, index)}>
                            </Form.Control>
                        </Form.Group>
                        <div className=" mt-4">
                        {laminateList.length-1 === index &&
                        <Button style={{width:"90px", height:"38px"}} onClick={addLaminate} variant="secondary" type="Input">
                            Add
                        </Button> }
                        </div>
                        &nbsp;&nbsp;
                        <div className="mt-4">
                            {laminateList.length > 1 && 
                            <Button onClick={() => removeLaminate(index)} variant="secondary" type="Delete">
                            Remove
                        </Button> }
                        </div>
                    </Row>))}
                </div>
                <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
            <h4>Cover Coat</h4>
                {coverCoatList.map((singleServices,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServices.service}
                        onChange = {(e) => handleCoverCoatChange(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServices.service}
                        onChange = {(e) => handleCoverCoatChange(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Thickness</Form.Label>
                        <Form.Control name='thickness' as="select"
                        value={singleServices.service}
                        onChange = {(e) => handleCoverCoatChange(e, index)}>
                            <option> 0.25 oz</option>
                            <option> Weights from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServices.service}
                        onChange = {(e) => handleCoverCoatChange(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {coverCoatList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={addCoverCoat} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;
                    <div className="mt-4">
                        {coverCoatList.length > 1 && 
                        <Button onClick={() => removeCoverCoat(index)} variant="secondary" type="Delete">
                        Remove
                    </Button> }
                    </div>
                </Row>))}
                </div>

                <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Stiffener</h4>
                {stiffenerList.map((singleServicestiff,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestiff.service}
                        onChange = {(e) => handleStiffenerChange(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestiff.service}
                        onChange = {(e) => handleStiffenerChange(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Thickness</Form.Label>
                        <Form.Control name='thickness' as="select"
                        value={singleServicestiff.service}
                        onChange = {(e) => handleStiffenerChange(e, index)}>
                            <option> 0.25 oz</option>
                            <option> Weights from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestiff.service}
                        onChange = {(e) => handleStiffenerChange(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {stiffenerList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={addStiffener} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {stiffenerList.length > 1 && 
                        <Button onClick={() => removeStiffener(index)} variant="secondary" type="Delete">
                        Remove
                    </Button> }
                    </div>
                </Row>))}
                </div>

                <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>3M Tape</h4>
                {tapeList.map((singleServicestape,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handle3MTapeChange(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handle3MTapeChange(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Model # </Form.Label>
                        <Form.Control name='thickness' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handle3MTapeChange(e, index)}>
                            <option> 587342</option>
                            <option> Model# from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestape.service}
                        onChange = {(e) => handle3MTapeChange(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {tapeList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={add3MTape} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {tapeList.length > 1 && 
                        <Button onClick={() => remove3MTape(index)} variant="secondary" type="Delete">
                        Remove
                    </Button> }
                    </div>
                    &nbsp;&nbsp;                   
                </Row>))}
                </div>
                
                <div className="col-11 mt-6" style={{display: 'inline-block', marginLeft:'4em', background: 'white', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} ></div>

            <h3 style={{marginLeft:'2.5em'}}><b>Processes</b></h3>

            <div className="col-11 mt-6" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Dry Film & Wet Processes</h4>
                {dryFilmList.map((singleServicestape,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleDryFilmChange(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleDryFilmChange(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestape.service}
                        onChange = {(e) => handleDryFilmChange(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {dryFilmList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={addDryFilm} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {dryFilmList.length > 1 && 
                        <Button onClick={() => removeDryFilm(index)} variant="secondary" type="Delete">
                        Remove
                    </Button> }
                    </div>
                    &nbsp;&nbsp;                   
                </Row>))}
                </div>

                <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Mechanical Processes</h4>
                {mechanicalProcessList.map((singleServicestape,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleMechanicalChange(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleMechanicalChange(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestape.service}
                        onChange = {(e) => handleMechanicalChange(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {mechanicalProcessList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={addMechanicalProcess} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {mechanicalProcessList.length > 1 && 
                        <Button onClick={() => removeMechanicalProcess(index)} variant="secondary" type="Delete">
                        Remove
                    </Button> }
                    </div>
                    &nbsp;&nbsp;                   
                </Row>))}
                </div>

               <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Standard Processes</h4>
                {standardProcessList.map((singleServicestape,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleStandardChange(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleStandardChange(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestape.service}
                        onChange = {(e) => handleStandardChange(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {standardProcessList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={addStandardProcess} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {standardProcessList.length > 1 && 
                        <Button onClick={() => removeStandardProcess(index)} variant="secondary" type="Delete">
                        Remove
                    </Button> }
                    </div>
                    &nbsp;&nbsp;                   
                </Row>))}
                </div>

                <div className="col-11 mt-3" style={{display: 'inline-block', marginLeft:'4em', background:'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                <h4>Finishes</h4>
                {finishesList.map((singleServicestape,index)=>( 
                <Row key={index}>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control name='supplier' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleFinishesChange(e, index)}>
                            <option> Dupont</option>
                            <option> Suppliers from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Material</Form.Label>
                        <Form.Control name='material' as="select"
                        value={singleServicestape.service}
                        onChange = {(e) => handleFinishesChange(e, index)}>
                            <option> FLP 7164</option>
                            <option> Materials from DB</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Used</Form.Label>
                        <Form.Control name='used' type="number" placeholder='0'
                        value={singleServicestape.service}
                        onChange = {(e) => handleFinishesChange(e, index)}>
                        </Form.Control>
                    </Form.Group>
                    <div className=" mt-4">
                    {finishesList.length-1 === index &&
                     <Button style={{width:"90px", height:"38px"}} onClick={addFinishes} variant="secondary" type="Input">
                        Add
                    </Button> }
                    </div>
                    &nbsp;&nbsp;

                    <div className="mt-4">
                        {finishesList.length > 1 && 
                        <Button onClick={() => removeFinishes(index)} variant="secondary" type="Delete">
                        Remove
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