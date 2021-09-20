import { Helmet } from 'react-helmet';
import AllCoffee from './AllCoffee.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

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

    useEffect(() => {
        const getData = async () => {
        const res = await axios.get(URL, config);
        setData(res.data.records)
        }
        getData();
    },[])

    async function handleVote(){

    }

    return (
        <div>
            <Helmet>
				<title>Cafe Loco | Ranking</title>
			</Helmet>
            <h2 className="title">Ranking</h2>
            {data.map((item, index) => {
            // Empty Airtable fields will create an unattached button.
            return (
                <div id="rankDiv">
                    <h2>#{index + 1}</h2>
                    <h4>{item.fields.name}</h4>
                    <p>votes: {item.fields.votes}</p>
                    <button onClick={handleVote}>Vote</button>
                </div>
            )
        })}
        </div>
    )
}

export default Rank;