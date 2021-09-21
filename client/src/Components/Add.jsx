import { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Form } from 'react-bootstrap';

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
    const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = {
        name,
        image,
    };
        const res = await axios.post(URL, { fields }, config);
        setName("");
        setImage("");
        setNotes("");
    };

    return (
        <div id="formDiv">
            <Helmet>
				<title>Cafe Loco | Add Coffee</title>
			</Helmet>

            <div id="addCoffeeDiv">
            <form onSubmit={handleSubmit}>
            <h2>Add Coffee</h2>
            <label>Name</label><br/>
            <input value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder = "enter name"
            /><br/>
            <label>Image URL</label><br/>
            <input value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder = "enter URL"
            /><br/>
            <label>Description</label><br/>
            <input value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder = "enter notes"
            /><br/>
            <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Add;