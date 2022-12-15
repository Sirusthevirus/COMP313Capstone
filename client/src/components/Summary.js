import React, { useRef, useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useReactToPrint } from "react-to-print";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


export default function Summary() {

  const [data, setData] = useState({
    _id: "",
    customer: "",
    panelSize: "",
<<<<<<< HEAD
    exchangeRate:"",
    freight:"",
    partNumber:"",
    revision:"",
    dateCreated:"",
    quoteNumber:"",
    
=======
    exchangeRate: "",
    freight: "",
    partNumber: "",
    revision: "",
    dateCreated: "",
    quoteNumber: "",
>>>>>>> 6ffe9bb5a22813de5cb7ab99387a77fe1a20096e
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: data.customer + "-quote#" + data.quoteNumber,
    onafterprint: () => alert("print success"),
  });

  let navigate = useNavigate();
  let { qId } = useParams();

  const apiUrl = "http://localhost:3000/quoteById/" + qId;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);


  return (
    <Jumbotron>
      <div className="summary" ref={componentRef}>
        <h1>Summary -- Customer: {data.customer}</h1>
        <br />
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Base Cost</th>
              <th>Customer Quote</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Panel size</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>#-up</td>
              <td></td>
              <td></td>
            </tr>
            <h5 className="material">MATERIALS</h5>
            <tr>
              <td>FLP7164</td>
              <td>9.75</td>
              <td>59.23</td>
            </tr>
            <tr>
              <td>FR7001</td>
              <td>2.23</td>
              <td>9.26</td>
            </tr>
            <h5 className="material">PROCESSING</h5>
            <tr>
              <td>DRY FILM</td>
              <td>0.85</td>
              <td>12.39</td>
            </tr>
            <tr>
              <td>DRY FILM</td>
              <td>0.85</td>
              <td>12.39</td>
            </tr>
            <hr />
            <tr>
              <td>TOTAL</td>
              <td></td>
              <td>751.91</td>
            </tr>
            <tr>
              <td>YIELD</td>
              <td></td>
              <td>0.85</td>
            </tr>
            <tr>
              <td>MARGIN</td>
              <td></td>
              <td>0.6</td>
            </tr>
            <tr>
              <td>UNIT</td>
              <td></td>
              <td>$30.72</td>
            </tr>
            <tr>
              <td>ASSEMBLY - SMT</td>
              <td></td>
              <td>$22.31</td>
            </tr>
            <tr>
              <td>TOTAL - ASSEMBLED NO COMP</td>
              <td></td>
              <td>$53.03</td>
            </tr>
          </tbody>
        </table>
      </div>
      <butotn className="printBtn" onClick={handlePrint}>
        Print
      </butotn>
    </Jumbotron>
  );
}
