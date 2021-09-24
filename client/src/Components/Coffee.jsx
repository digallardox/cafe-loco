import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { Card, Col} from 'react-bootstrap';
import Footer from './Footer';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/tbl1RqNOIVfRyZhso?api_key=${airtableKey}`;

const config = {
    headers: {
        Authorization: `Bearer ${airtableKey}`,
    }};

function Coffee() {
    const [data, setData] = useState([]);

    // Initialize Axios request
    useEffect(() => {
        const getData = async () => {
        const res = await axios.get(URL, config);
        setData(res.data.records);
        }
        getData();
    },[]);

function handleLearn(){
    console.log("trust");
}

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
            <div class="shadow p-3 mb-5 bg-white rounded">
            <Col>
            <Card>
                <Card.Img variant="top" src={item.fields.image} />
                <Card.Body>
                <Card.Title>{item.fields.name}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec commodo mi, a interdum diam. Phasellus ac sapien eu nisl rutrum elementum.
                </Card.Text>
                <button
                onClick={handleLearn}
                type="submit"
                id="voteButton">
                Learn More
                </button>
                </Card.Body>
            </Card>
            </Col>
            </div>
            </div>
            )})}
            </div>
            <Footer />
        </>
    )};

export default Coffee;