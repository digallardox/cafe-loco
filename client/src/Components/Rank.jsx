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
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const getData = async () => {
        const res = await axios.get(URL, config);
        setData(res.data.records)
        }
        getData();
    },[toggle])

    async function handleVote(id, votes){
        await axios.patch(`${URL}/${id}`, {fields: {votes: votes + 1}}, config);
        setToggle(toggle => !toggle);

    }

    return (
        <>
            <Helmet>
				<title>Cafe Loco | Ranking</title>
			</Helmet>

            <h2>Ranking</h2>

            {data.map((item, index) => {
            return (
            <div id="rankDiv">
                    <h2>#{index + 1}</h2>
                    <h4>{item.fields.name}</h4>
                    <p>votes: {item.fields.votes}</p>

                    <button onClick={()=> handleVote(item.id, item.fields.votes)}>Vote</button>
                </div>
            )
            })}
            </>
            )
}

export default Rank;