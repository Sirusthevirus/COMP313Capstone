import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
// import { withRouter } from 'react-router-dom';
import "../../quote.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MaterialListCard from "../LaminateMaterialCard/LaminateMaterialCard";
import LaminateMaterialCard from "../LaminateMaterialCard/LaminateMaterialCard";
import CoverCoatCard from "../CoverCoatCard/CoverCoatCard";
import StiffenerCard from "../StiffenerCard/StiffenerCard";
import TapeCard from "../3MTapeCard/3MTapeCard";
import DryFilmCard from "../DryFilmCard/DryFilmCard";
import { Button, Typography } from "@mui/material";
import MechanicalCard from "../MechanicalCard/MechanicalCard";
import StandardCard from "../StandardCard/StandardCard";
import FinishCard from "../FinishCard/FinishCard";

function Quote(props) {
  let navigate = useNavigate();

  /* Populating the drop down options*/

  const [laminateOptions, setLaminateOptions] = useState([]);
  const [coverCoatOptions, setCoverCoatOptions] = useState([]);
  const [stiffenerOptions, setStiffenerOptions] = useState([]);
  const [tapeOptions, setTapeOptions] = useState([]);
  const [dryFilmOptions, setDryFilmOptions] = useState([]);
  const [mechanicalOptions, setMechanicalOptions] = useState([]);
  const [standardOptions, setStandardOptions] = useState([]);
  const [finishesOptions, setFinishesOptions] = useState([]);

  /* Selecting an item from the drop down options*/

  const [quote, setQuote] = useState("");

  const [materialIds, setMaterialIds] = useState([]);
  const [materialNumberOfUse, setMaterialNumberOfUse] = useState({});
  const [dryAndWetIds, setDryAndWetIds] = useState([]);
  const [dryAndWetNumberOfUse, setDryAndWetNumberOfUse] = useState({});
  const [mechanicalIds, setMechanicalIds] = useState([]);
  const [mechanicalNumberOfUse, setMechanicalNumberOfUse] = useState({});
  const [standardIds, setStandardIds] = useState([]);
  const [standardNumberOfUse, setStandardNumberOfUse] = useState({});
  const [finishIds, setFinishIds] = useState([]);
  const [finishNumberOfUse, setFinishNumberOfUse] = useState({});

  const [tapeList, set3MTape] = useState([
    { supplier: "", material: "", thinkness: "", used: "" },
  ]);

  const [dryFilmList, setDryFilm] = useState([
    { supplier: "", material: "", thinkness: "", used: "" },
  ]);

  const [mechanicalProcessList, setMechanicalProcess] = useState([
    { supplier: "", material: "", thinkness: "", used: "" },
  ]);

  const [standardProcessList, setStandardProcess] = useState([
    { supplier: "", material: "", thinkness: "", used: "" },
  ]);

  const [finishesList, setFinishes] = useState([
    { supplier: "", material: "", thinkness: "", used: "" },
  ]);

  const [totalPrice, setTotalPrice] = useState();

  let totalPrice2 = 0;

  // const addLaminate = (e) => {
  //     e.preventDefault();
  //     console.log(e.target.form.laminateSupplier.selectedOptions[0].id);
  //     setTotalPrice(...e.target.form.laminatePrice.value)
  //     totalPrice2 = parseInt(totalPrice2 + e.target.form.laminatePrice.value)
  //     setLaminateMaterial([...laminateList, {
  //         id: e.target.form.laminateSupplier.id, supplier: e.target.form.laminateSupplier.value, material: e.target.form.laminateMaterial.value,
  //         weight: e.target.form.laminateWeight.value, used: e.target.form.laminateUsed.value
  //     }]);
  //     let temp = [...laminateIDs, e.target.form.laminateSupplier.selectedOptions[0].id]
  //     setLaminateIDs(temp);
  //     setQuote({ ...quote, "materials": temp });
  // };

  // const addCoverCoat = () => {
  //     setCoverCoat([...coverCoatList, { supplier: "", material: "", thinkness: "", used: "" }]);

  // };

  // const addStiffener = () => {
  //     setStiffener([...stiffenerList, { supplier: "", material: "", thinkness: "", used: "" }]);

  // };

  //   const add3MTape = () => {
  //     set3MTape([
  //       ...tapeList,
  //       { supplier: "", material: "", thinkness: "", used: "" },
  //     ]);
  //   };

  // const addDryFilm = () => {
  //   setDryFilm([...dryFilmList, { supplier: "", used: "" }]);
  // };

  // const addMechanicalProcess = () => {
  //   setMechanicalProcess([
  //     ...mechanicalProcessList,
  //     { supplier: "", used: "" },
  //   ]);
  // };

  // const addStandardProcess = () => {
  //   setStandardProcess([...standardProcessList, { supplier: "", used: "" }]);
  // };

  const addFinishes = () => {
    setFinishes([...finishesList, { supplier: "", used: "" }]);
  };

  /* Remove Button*/

  // const removeLaminate = (index) => {
  //     const list = [...laminateList]
  //     list.splice(index, 1);
  //     setLaminateMaterial(list)
  // };

  // const removeCoverCoat = (index) => {
  //     const list = [...coverCoatList]
  //     list.splice(index, 1);
  //     setCoverCoat(list)
  // };

  // const removeStiffener = (index) => {
  //     const list = [...stiffenerList]
  //     list.splice(index, 1);
  //     setStiffener(list)
  // };

  //   const remove3MTape = (index) => {
  //     const list = [...tapeList];
  //     list.splice(index, 1);
  //     set3MTape(list);
  //   };

  // const removeDryFilm = (index) => {
  //   const list = [...dryFilmList];
  //   list.splice(index, 1);
  //   setDryFilm(list);
  // };

  // const removeMechanicalProcess = (index) => {
  //   const list = [...mechanicalProcessList];
  //   list.splice(index, 1);
  //   setMechanicalProcess(list);
  // };

  // const removeStandardProcess = (index) => {
  //   const list = [...standardProcessList];
  //   list.splice(index, 1);
  //   setStandardProcess(list);
  // };

  // const removeFinishes = (index) => {
  //   const list = [...finishesList];
  //   list.splice(index, 1);
  //   setFinishes(list);
  // };

  const fetchLaminateData = () => {
    axios
      .get("http://localhost:5000/specificMaterial/Laminate Material")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is success by stats code 200,201 ...etc
          setLaminateOptions(data);
          //console.log(data)
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchCoverCoatData = () => {
    axios
      .get("http://localhost:5000/specificMaterial/Cover Coat")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is success by stats code 200,201 ...etc
          setCoverCoatOptions(data);
          //console.log("fetchCoverCoatData:",data)
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchStiffenerData = () => {
    axios
      .get("http://localhost:5000/specificMaterial/Stiffener")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is success by stats code 200,201 ...etc
          setStiffenerOptions(data);
          //console.log("fetchStiffenerData:", data)
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchTapeData = () => {
    axios
      .get("http://localhost:5000/specificMaterial/3M Tapes")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is success by stats code 200,201 ...etc
          setTapeOptions(data);
          //console.log("fetchTapeData:",data)
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchDryFilmData = () => {
    axios
      .get("http://localhost:5000/DryAndWets")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is success by stats code 200,201 ...etc
          setDryFilmOptions(data);
          //console.log("fetchDryFilmData:",data)
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchMechanicalData = () => {
    axios
      .get("http://localhost:5000/mechanicals")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is success by stats code 200,201 ...etc
          setMechanicalOptions(data);
          //console.log("fetchMechanicalData:",data)
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchStandardData = () => {
    axios
      .get("http://localhost:5000/standard")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is success by stats code 200,201 ...etc
          setStandardOptions(data);
          //console.log("fetchStandardData:",data)
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchFinishesData = () => {
    axios
      .get("http://localhost:5000/finishes")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is success by stats code 200,201 ...etc
          setFinishesOptions(data);
          //console.log("fetchFinishesData:",data)
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchLaminateData();
    fetchCoverCoatData();
    fetchStiffenerData();
    fetchTapeData();
    fetchDryFilmData();
    fetchMechanicalData();
    fetchStandardData();
    fetchFinishesData();
    //console.log("list from useEffect", laminateList)
    //console.log("laminate Options from useEffect", laminateOptions)
  }, []);

  // Save form input to quote hook
  const onChange = (e) => {
    console.log("why");

    console.log("Inside onChange: " + e.target.value);
    setQuote({ ...quote, [e.target.name]: e.target.value });
  };

  const postUrl = "http://localhost:5000/addQuote/";
  const saveQuote = (e) => {
    e.preventDefault();

    // Set quote creation date to now
    const currDate = new Date();
    console.log("quote, here: ");
    console.log(quote);
    console.log("quote inside saveQuote: " + quote);
    const data = {
      customer: quote.customer,
      panelSize: quote.panelSize,
      exchangeRate: parseInt(quote.exchangeRate),
      freight: parseInt(quote.freight),
      numberOfLayers: parseInt(quote.numberOfLayers),
      partNumber: parseInt(quote.partNumber),
      revision: parseInt(quote.revision),
      dateCreated: currDate,
      materials: quote.materials,
      materialNumberOfUse: quote.materialNumberOfUse,
      dryAndWet: quote.dryAndWet,
      dryAndWetNumberOfUse: quote.dryAndWetNumberOfUse,
      standard: quote.standard,
      standardNumberOfUse: quote.standardNumberOfUse,
      mechanical: quote.mechanical,
      mechanicalNumberOfUse: quote.mechanicalNumberOfUse,
      finish: quote.finish,
      finishNumberOfUse: quote.finishNumberOfUse,
      // additional: quote.additional,
      // assembly: quote.assembly
    };

    const demo = {};

    console.log(data);
    axios
      .post(postUrl, data)
      .then((result) => {
        // props.history.push('/show/' + result.data._id) // giving errors
        console.log(result.data);
        navigate("/allQuotes");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [quotePrice, setQuotePrice] = useState([]);

  var calculatePrice = () => {};

  const [laminatePrice, setLaminatePrice] = useState([]);

  const getMaterialPrice = (e) => {
    axios
      .get("http://localhost:5000/byId/6386c4c87c89b5388c0cd637")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is success by stats code 200,201 ...etc
          setLaminatePrice(data.price);
        } else {
          //error handle section
        }
      })
      .catch((error) => console.log(error));
  };

  // Update quote for ID
  useEffect(() => {
    setQuote((prevState) => {
      return {
        ...prevState,
        materials: materialIds,
        dryAndWet: dryAndWetIds,
        standard: standardIds,
        mechanical: mechanicalIds,
        finish: finishIds,
      };
    });
  }, [materialIds, dryAndWetIds, standardIds, finishIds, mechanicalIds]);

  // Update quote for number of use
  useEffect(() => {
    function add(accumulator, a) {
      return parseInt(accumulator) + parseInt(a);
    }

    const tempMaterialNumberOfUse = [
      ...Object.values(materialNumberOfUse),
    ].reduce(add, 0);

    const tempDryAndWetNumberOfUse = [
      ...Object.values(dryAndWetNumberOfUse),
    ].reduce(add, 0);

    const tempStandardNumberOfUse = [
      ...Object.values(standardNumberOfUse),
    ].reduce(add, 0);

    const tempMechanicalNumberOfUse = [
      ...Object.values(mechanicalNumberOfUse),
    ].reduce(add, 0);

    const tempFinishNumberOfUse = [...Object.values(finishNumberOfUse)].reduce(
      add,
      0
    );

    setQuote((prevState) => {
      return {
        ...prevState,
        materialNumberOfUse: tempMaterialNumberOfUse,
        dryAndWetNumberOfUse: tempDryAndWetNumberOfUse,
        standardNumberOfUse: tempStandardNumberOfUse,
        mechanicalNumberOfUse: tempMechanicalNumberOfUse,
        finishNumberOfUse: tempFinishNumberOfUse,
      };
    });
  }, [
    materialNumberOfUse,
    dryAndWetNumberOfUse,
    standardNumberOfUse,
    mechanicalNumberOfUse,
    finishNumberOfUse,
  ]);

  return (
    <Jumbotron style={{ background: "white" }}>
      <h2 style={{ marginLeft: "2.5em" }}>
        <b>Create Quote</b>
      </h2>
      <Form style={{ display: "flex" }} onSubmit={saveQuote}>
        <div className="col-12 mt-3" style={{ display: "inline-block" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Group as={Row} className="mb-3">
              <Col sm={4}>
                <Form.Label>
                  {" "}
                  <b>Customer</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="customer"
                  id="customer"
                  value={quote.customer}
                  onChange={onChange}
                ></Form.Control>
              </Col>
              <Col sm={4}>
                <Form.Label>
                  <b>Panel Size &emsp; &emsp; &emsp;</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="panelSize"
                  id="panelSize"
                  value={quote.panelSize}
                  onChange={onChange}
                >
                  <option>-- Select Panel Size --</option>
                  <option value="12x18"> 12x18</option>
                  <option value="18x24"> 18x24</option>
                </Form.Control>
              </Col>
              <Col sm={4}>
                <Form.Label>
                  <b>Exchange Rate</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="exchangeRate"
                  id="exchangeRate"
                  value={quote.exchangeRate}
                  onChange={onChange}
                ></Form.Control>
              </Col>
            </Form.Group>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Group as={Row} className="mb-3">
              <Col sm={4}>
                <Form.Label>
                  <b>Part Number</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="partNumber"
                  id="partNumber"
                  value={quote.partNumber}
                  onChange={onChange}
                ></Form.Control>
              </Col>
              <Col sm={4}>
                <Form.Label>
                  <b>Number of Layers</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="numberOfLayers"
                  id="numberOfLayers"
                  value={quote.numberOfLayers}
                  onChange={onChange}
                >
                  <option>-- Select Layers --</option>
                  <option value="1"> 1</option>
                  <option value="2"> 2</option>
                  <option value="3"> 3</option>
                  <option value="4"> 4</option>
                  <option value="5"> 5</option>
                  <option value="6"> 6</option>
                  <option value="7"> 7</option>
                  <option value="8"> 8</option>
                  <option value="9"> 9</option>
                  <option value="10"> 10</option>
                  <option value="11"> 11</option>
                  <option value="12"> 12</option>
                  <option value="14"> 13</option>
                  <option value="14"> 14</option>
                  <option value="15"> 15</option>
                  <option value="16"> 16</option>
                  <option value="17"> 17</option>
                  <option value="18"> 18</option>
                  <option value="19"> 19</option>
                  <option value="20"> 20</option>
                </Form.Control>
              </Col>
              <Col sm={4}>
                <Form.Label>
                  <b>Freight</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="freight"
                  id="freight"
                  value={quote.freight}
                  onChange={onChange}
                ></Form.Control>
              </Col>
            </Form.Group>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Group as={Row} className="mb-3">
              <Col sm={4}>
                <Form.Label>
                  <b>Revision</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="revision"
                  id="revision"
                  value={quote.revision}
                  onChange={onChange}
                ></Form.Control>
              </Col>
              <Col sm={4}>
                <Form.Label>
                  <b>Technology &emsp; &emsp; &nbsp;</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="technology"
                  id="technology"
                  value={quote.technology}
                  onChange={onChange}
                >
                  <option>-- Select Technology--</option>
                  <option value="Rigid"> Rigid</option>
                  <option value="Flex"> Flex</option>
                  <option value="Rigid-Flex"> Rigid-Flex</option>
                </Form.Control>
              </Col>
              <Col sm={4}>
                <Form.Label>
                  <b>Assembly</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="assembly"
                  id="assembly"
                  value={quote.assembly}
                  onChange={onChange}
                ></Form.Control>
              </Col>
            </Form.Group>
          </div>

          {/* Section Header */}
          <Typography variant={"h3"} sx={{ marginTop: "48px" }}>
            Manufacturing
          </Typography>

          <LaminateMaterialCard
            options={laminateOptions}
            ids={materialIds}
            setIds={setMaterialIds}
            numberOfUse={materialNumberOfUse}
            setNumberOfUse={setMaterialNumberOfUse}
          />
          <CoverCoatCard
            ids={materialIds}
            options={coverCoatOptions}
            setIds={setMaterialIds}
            numberOfUse={materialNumberOfUse}
            setNumberOfUse={setMaterialNumberOfUse}
          />
          <StiffenerCard
            ids={materialIds}
            options={stiffenerOptions}
            setIds={setMaterialIds}
            numberOfUse={materialNumberOfUse}
            setNumberOfUse={setMaterialNumberOfUse}
          />
          <TapeCard
            ids={materialIds}
            options={tapeOptions}
            setIds={setMaterialIds}
            numberOfUse={materialNumberOfUse}
            setNumberOfUse={setMaterialNumberOfUse}
          />

          {/* Section Header */}
          <Typography variant={"h3"} sx={{ marginTop: "48px" }}>
            Processes
          </Typography>

          <DryFilmCard
            ids={dryAndWetIds}
            options={dryFilmOptions}
            setIds={setDryAndWetIds}
            numberOfUse={dryAndWetNumberOfUse}
            setNumberOfUse={setDryAndWetNumberOfUse}
          />

          <MechanicalCard
            ids={mechanicalIds}
            options={mechanicalOptions}
            setIds={setMechanicalIds}
            numberOfUse={mechanicalNumberOfUse}
            setNumberOfUse={setMechanicalNumberOfUse}
          />

          <StandardCard
            ids={standardIds}
            options={standardOptions}
            setIds={setStandardIds}
            numberOfUse={standardNumberOfUse}
            setNumberOfUse={setStandardNumberOfUse}
          />

          <FinishCard
            ids={finishIds}
            options={finishesOptions}
            setIds={setFinishIds}
            numberOfUse={finishNumberOfUse}
            setNumberOfUse={setFinishNumberOfUse}
          />

          <Button
            sx={{ marginTop: "24px" }}
            variant="contained"
            type="Submit"
            fullWidth
          >
            Submit
          </Button>
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
