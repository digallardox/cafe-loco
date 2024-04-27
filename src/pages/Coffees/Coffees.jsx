import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Children, useEffect, useState } from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form.jsx';
import styles from "./Coffees.module.css"
import { AIRTABLE_API, AIRTABLE_CONFIG, getCoffees } from '../../helpers/airtable.js';
import { handleSearch } from '../../utils/search.js';

const ACCESS_TOKEN = localStorage.getItem("accessToken") || null
function Coffees() {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        const getCoffees = async () => {
        const coffees = await getCoffees()
        setCoffees(coffees.data.records);
        }
        getCoffees();
    }, [])

    return (
        <>

            <div id={styles.header}>
                <div id={styles.headerText}>
                    Welcome to the wonderful world of coffee!<br/>
                    Find a recipe below or <Link to="submit-coffee">add your own</Link> &#9749; &#65039;
                </div>
                
            </div>
            <input 
            id={styles.searchbar}
            type="text"
            placeholder='Search...'
            onChange={handleSearch}
            />
            
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
                <Link to={`/coffee/${coffee.id}`}>
                <button id={styles.button}>
                    Learn more &rarr;
                </button>
                </Link>
                </Card.Body>
            </Card>
            </Col>
            </div>
            </div>
            ))}
            </div>
        </>
    )};

export default Coffees;
