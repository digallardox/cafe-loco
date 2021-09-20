import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

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
        <h2 className="title">All Coffee</h2>
        <div id="cardsDiv">
        {data.map((item) => {
            return (
            <div id="cards">
            <Col>
            <Card>
                <Card.Img variant="top" src={item.fields.image} />
                <Card.Body>
                <Card.Title>{item.fields.name}</Card.Title>
                <p><u>{item.fields.votes} votes</u></p>
                <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <button>Learn More</button>
                <button>Upvote</button>
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