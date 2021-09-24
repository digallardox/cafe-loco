import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Card, Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Cafe%20Loco`;

const config = {
        headers: {
            Authorization: `Bearer ${airtableKey}`,
        }
    };

function Rank(){
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false);

    // Initialize Axios request
    useEffect(() => {
        const getData = async () => {
        const res = await axios.get(URL, config);
        res.data.records.sort(
            (coffeeOne, coffeeTwo)=> {
            if (coffeeOne.fields.votes > coffeeTwo.fields.votes) {
            return -1;
            }});
            setData(res.data.records);
        }
        getData();
    },[toggle]);


async function handleLike(id, votes){
        await axios.patch(`${URL}/${id}`, {fields: {votes: votes + 1}}, config);
        setToggle(toggle => !toggle);
    };

async function handleDislike(id, votes){
        await axios.patch(`${URL}/${id}`, {fields: {votes: votes - 1}}, config);
        setToggle(toggle => !toggle);
    };

    return (
        <>
        <Helmet>
		<title>Coffee Ranking</title>
		</Helmet>

            <h2 className="pageTitle">Coffee Ranking</h2>

            <div className="cardsDiv">
            {data.map((item, index) => {
            return (

            // Begin Cards Render
            <div id="cards">
            <Col>
            <Card>
                <Card.Img variant="top" src={item.fields.image}/>
                <div id="circleDiv">
                <h5 id="rankNumber"><em>#{index +1}</em></h5>
                </div>
                <Card.Body>
                <Card.Title>{item.fields.name}</Card.Title>
                <p>{item.fields.votes} likes</p>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec commodo mi, a interdum diam. Phasellus ac sapien eu nisl rutrum elementum.
                </Card.Text>
                <button type="submit"
                onClick={()=> handleLike(item.id, item.fields.votes)}>
                + Like
                </button>
                <button type="submit"
                onClick={()=> handleDislike(item.id, item.fields.votes)}>
                - Dislike
                </button>
                </Card.Body>
            </Card>
            </Col>
            </div>
            )
            })}
            </div>
        </>
        )};

export default Rank;