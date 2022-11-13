import React, { useRef } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useReactToPrint } from "react-to-print";

export default function Summary() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "quote",
    onafterprint: () => alert("print success"),
  });

  return (
    <Jumbotron>
      <div className="summary" ref={componentRef}>
        <h1>Summary</h1>
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
