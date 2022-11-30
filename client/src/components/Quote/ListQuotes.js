import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <>
            <h1 className='text-center m-2'>All Quotes</h1>
            <div className='m-5'>
                <Button variant="primary" className='w-25 mb-2' onClick={addQuote}>
                    Create New Quote
                </Button>
                <Table className='table' hover>
                    <thead className='table-dark'>
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
            </div>
        </>
    )
}

export default ListQuotes