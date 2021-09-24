import axios from 'axios';

import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

let airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
let airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/Cafe%20Loco`;

const config = {
        headers: {
            Authorization: `Bearer ${airtableKey}`,
        }
    }

function AllCoffee() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
        const res = await axios.get(URL, config);
        setData(res.data.records)
        }
        getData();
    },[])

    
    return (
        <>
        <Helmet>
		<title>All Coffee</title>
		</Helmet>
        <h2 className="pageTitle">All Coffee</h2>
        <div className="cardsDiv">
        {data.map((item) => {
            return (
            <div id="cards">
            <Col>
            <Card>
                <Card.Img variant="top" src={item.fields.image} />
                <Card.Body>
                <Card.Title>{item.fields.name}</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </div>
            )
        })}
        </div>
        </>
    )
};

export default AllCoffee;