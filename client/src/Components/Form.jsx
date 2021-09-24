import { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Cafe%20Loco`;
    
const config = {
    headers: {
        Authorization: `Bearer ${airtableKey}`,
    }};

function Form(){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = {
        name,
        image,
    }
        const res = await axios.post(URL, { fields }, config);
        setName("");
        setImage("");
        setNotes("");
    };

    return (
        <>
        <Helmet>
		<title>Submit Coffee</title>
		</Helmet>

            <h2 className="pageTitle">Submit Coffee</h2>

            <div id="formDiv">
            <form onSubmit={handleSubmit}>
            <label>Coffee Name</label>
            <input 
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <label>Image URL</label>
            <input value={image}
            className="input"
            onChange={(e) => setImage(e.target.value)}/>
            <label>Description</label>
            <textarea value={notes}
            className="input"
            onChange={(e) => setNotes(e.target.value)}>
            </textarea>
            <button type="submit" >
            Primary
            </button>
            </form>
            </div>
        </>
    )};

export default Form;