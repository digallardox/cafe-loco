import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCoffee } from '../../helpers/airtable';
import styles from "./SingleCoffee.module.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function SingleCoffee(){
    const [coffee, setCoffee] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const coffeeDetails = async () => {
            const res = await getSingleCoffee(id)
            setCoffee(res.data.fields);
        }
        coffeeDetails();
    },[id]);

    return (
        <>
        <Link to="/">&#9166; Back </Link>
        <div id={styles.pageContainer}>
                <img 
                id={styles.image}
                src={coffee.image} />
                <div id={styles.text}>
                <h2>{coffee.name}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec commodo mi, a interdum diam. Phasellus ac sapien eu nisl rutrum elementum.</p>
                </div>
            </div>
        </>
    )
};
