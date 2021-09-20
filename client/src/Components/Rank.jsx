import { Helmet } from 'react-helmet';
import AllCoffee from './AllCoffee.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';


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
        console.log(data);
        }
        getData();
    },[])

    useEffect(() => {
        const getVote = async () => {
        
        }
    })

    return (
        <div>
            <Helmet>
				<title>Cafe Loco | Ranking</title>
			</Helmet>
            <h2 className="pageTitles">Ranking</h2>
            {data.map((item) => {
            return (
                <div>
                    <h2>{item.fields.name}</h2>
                    <p>{item.fields.notes}</p>
                    <p>{item.fields.votes}</p>
                    <button onClick="handleVote">Vote</button>
                </div>
            )
        })}
        </div>
    )
}

export default Rank;