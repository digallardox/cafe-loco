import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Children, useEffect, useState } from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form.jsx';
import styles from "./Coffees.module.css"
import { AIRTABLE_API, AIRTABLE_CONFIG } from '../../helpers/airtable.js';

function Coffees() {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        const getCoffees = async () => {
        const res = await axios.get(AIRTABLE_API, AIRTABLE_CONFIG);
        console.log(res)
        setCoffees(res.data.records);
        }
        getCoffees();
    }, [])

    return (
        <>
            {/* <h2 className="pageTitle">All Coffee</h2> */}

            {/* <div className="cardsDiv"> */}
            <div id={styles.header}>
                <div id={styles.headerText}>
                    Welcome to the wonderful world of coffee!<br/>
                    Find a recipe below or add your own
                </div>
            <Form />
            </div>

            <div id={styles.flexContainer}>
            {/* <div id={styles.flexRow}> */}

            {coffees.map(coffee => (

            <div id={styles.flexChild}>
            <div id={styles.shadow}>
            <Col>
            <Card>
                <Card.Img variant="top" src={coffee.fields.image} />
                <Card.Body>
                <Card.Title>{coffee.fields.name}</Card.Title>
                
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec commodo mi, a interdum diam. Phasellus ac sapien eu nisl rutrum elementum.
                </Card.Text>
                <button id={styles.button}>
                    Learn more =>
                </button>
                <Link to={`/coffee/${coffee.id}`}>
                </Link>
                </Card.Body>
            </Card>
            </Col>
            </div>
            </div>
            ))}
            </div>
            {/* </div> */}
            {/* </div> */}
        </>
    )};

export default Coffees;
