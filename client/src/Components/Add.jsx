import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

    let airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
    let airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
    const URL = `https://api.airtable.com/v0/${airtableBase}/Cafe%20Loco`;
    
    const config = {
        headers: {
            Authorization: `Bearer ${airtableKey}`,
        },
    };

function Add(){
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = {
        name,
        notes,
    };
        const res = await axios.post(URL, { fields }, config);
        console.log(res.data);
    };

    return (
        <div id="formDiv">
            <Helmet>
				<title>Cafe Loco | Add Coffee</title>
			</Helmet>
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)}/><br/>
            <label>Toppings</label>
            <input value={notes} onChange={(e) => setNotes(e.target.value)}/><br/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Add;