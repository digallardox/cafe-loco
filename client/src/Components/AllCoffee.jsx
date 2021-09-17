import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

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
        console.log(data);
        }
        getData();
    },[])

    
    return (
        <div>

        {data.map((item) => {
            return (
                <div>
                    <h2>{item.fields.name}</h2>
                    <p>{item.fields.notes}</p>
                </div>
            )
        })}
        </div>
    )
};

export default AllCoffee;