import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';

function ListQuotes() {
    const [quotes, setQuotes] = useState([])

    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            axios.get('/quotes')
                .then(result => {
                    setQuotes(result.data);
                }).catch((error) => {
                    console.log('error in fetchData:', error)
                });
        };
        fetchData();
    }, []);

    const quoteDetails = (id) => { navigate('/courses/details/' + id) }

    const addQuote = () => { navigate('/quote') }

    return (
        <Jumbotron style={{background: 'white'}}>
            <h2 style={{marginLeft:'2.5em'}}><b> Previous Quotes </b></h2>

            <div className="col-11 mt-6" style={{display: 'inline-block', marginLeft:'4em', background: 'lightgrey', paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1.5em', paddingBottom: '1.5em', borderRadius:'25px'}} >
                
                <Table className='table' hover>
                    <thead className='table-dark' style={{background: '#111868'}}>
                        <tr>
                            <th scope="col">Quote #</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Part Number</th>
                            <th scope="col">Revision</th>
                            <th scope="col">Panel Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotes.map((quote) => (
                            <tr key={quote._id}
                            // onClick={() => { quoteDetails(quote._id) }}
                            >
                                <td>{quote._id}</td>
                                <td>{quote.customer}</td>
                                <td>{quote.partNumber}</td>
                                <td>{quote.revision}</td>
                                <td>{quote.panelSize}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="col-12 mt-3" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button onClick={addQuote} style={{width:"200px", height:"50px"}}  variant="secondary">
                    Create New Quote
                </Button>
                </div>
            </div>
        </Jumbotron>
    )
}

export default ListQuotes