import { useEffect, useState } from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from "./Coffees.module.css"
import { getCoffees } from '../../helpers/airtable.js';
// import { handleSearch } from '../../utils/search.js';

function Coffees() {
    const [coffees, setCoffees] = useState([]);
    const [search, setSearch] = useState("")
    const [x, setX] = useState([])

    useEffect(() => {
        const getData = async () => {
        const coffees = await getCoffees()
        setCoffees(coffees);
        }
        getData();
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const x = coffees.filter(n =>
        n.fields.name.toLowerCase().includes(search)
    )
    setX(x)
    }

    if (search) {
        return (
            <>
            <div id={styles.header}>
                <div id={styles.headerText}>
                    Welcome to the wonderful world of coffee!<br/>
                    Find a recipe below or <Link to="submit-coffee">add your own</Link> &#9749; &#65039;
                </div>
            </div>
            
            <input 
            id={styles.z}
            type="text"
            placeholder='&#128270; Search...'
            value={search}
            onChange={e => handleSearch(e)}
            />
            <h2>Search results...</h2>

            
            <div id={styles.flexContainer}>
            {/* <div id={styles.flexRow}> */}

            {x.map(coffee => (

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
        )
    }

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
            placeholder='&#128270; Search...'
            value={search}
            onChange={e => handleSearch(e)}
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
