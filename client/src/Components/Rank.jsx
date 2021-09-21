import { Helmet } from 'react-helmet';
import AllCoffee from './AllCoffee.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

// How to sort by value in table
// How to add to value on button click

let airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
let airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/Cafe%20Loco`;

const config = {
        headers: {
            Authorization: `Bearer ${airtableKey}`,
        }
    }

function Rank(){
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const getData = async () => {
        const res = await axios.get(URL, config);
        setData(res.data.records)
        }
        getData();
    },[toggle])

    async function handleVote(id, votes){
        await axios.patch(`${URL}/${id}`, {fields: {votes: votes + 1}}, config);
        setToggle(toggle => !toggle);

    }

    return (
        <>
            <Helmet>
				<title>Cafe Loco | Ranking</title>
			</Helmet>

            <h2>Ranking</h2>
            <div id="cardsDiv">

            {data.map((item, index) => {
            return (
            
            <div id="cards">
            <Col>
            <Card>
                <Card.Img variant="top" src={item.fields.image} />
                <Card.Body>
                <Card.Title>#{index +1} : {item.fields.name}</Card.Title>
                <p><u>{item.fields.votes} votes</u></p>
                <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <button onClick={()=> handleVote(item.id, item.fields.votes)}>Vote</button>
                </Card.Body>
            </Card>
            </Col>
            </div>
            )
            })}
            </div>
            </>
            )
}

export default Rank;