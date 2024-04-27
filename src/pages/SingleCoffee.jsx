import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col} from 'react-bootstrap';
import { AIRTABLE_API, AIRTABLE_CONFIG } from '../helpers/airtable';

export default function SingleCoffee(){
    const [coffee, setCoffee] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const coffeeDetails = async () => {
            const res = await axios.get(`${AIRTABLE_API}/${id}`, AIRTABLE_CONFIG);
            console.log(res)
            setCoffee(res.data.fields);
        }
        coffeeDetails();
    },[id]);

    return (
        <>
        <h2 className="pageTitle">{coffee.name}</h2>
            <div id="cards">
            <div class="shadow p-3 mb-5 bg-white rounded">
            <Col>
            <Card>
                <Card.Img variant="top" src={coffee.image} />
                <Card.Body>
                <Card.Title>Ingredients</Card.Title>
                <Card.Text>{coffee.ingredients}</Card.Text>
                <Card.Title>Directions</Card.Title>
                <Card.Text>{coffee.directions}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </div>
            </div>
            </>
    )
};
