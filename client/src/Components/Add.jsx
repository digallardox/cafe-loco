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
        <>
            <Helmet>
				<title>Add Coffee</title>
			</Helmet>
            <h2 className="pageTitle">Add Coffee</h2>
            <div id="formDiv">
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <p>space</p>
            <label>Image URL</label>
            <input value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            <p>space</p>
            <label>Description</label>
            <textarea value={notes}
            onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <br/>
            <button type="submit">Submit</button>
            </form>
            </div>
        </>
    )
}

export default Add;