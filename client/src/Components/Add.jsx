import { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Footer from './Footer';

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
            <h2 className="title">Add Coffee</h2>
            <div id="formDiv">
            <form onSubmit={handleSubmit}>
            <label>test</label>
            <input value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder = "Name"/>
            <label>test</label>
            <input value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder = "Image URL"/>
            <label>test</label>
            <textarea value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder = "Description"
            ></textarea>
            <br/>
            <button type="submit">Submit</button>
            </form>
            </div>
        <Footer/>
        </>
    )
}

export default Add;