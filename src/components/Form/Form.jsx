import React, { useState } from 'react';
import axios from 'axios';
import { Card, Col} from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';
import { AIRTABLE_API, AIRTABLE_CONFIG } from '../../helpers/airtable';
import styles from "./Form.module.css"

const Form = () => {
    const [fields, setFields] = useState({name: "", image: "", description: ""})
    const [isChecked, setIsChecked] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isChecked) {
            alert("must agree to terms & conditions")
            return;
        }

        if (AIRTABLE_API && typeof AIRTABLE_API === "string"){
        await axios.post(
            AIRTABLE_API,
            { fields },
            AIRTABLE_CONFIG
        )

        setFields({name: "", image: "", description: ""})
        window.location.reload();
    }
    };

    const updateField = (e, item) => {
        setFields(prev => ({
            ...prev,
            [item]: e.target.value
        }))
    }

    const handleBoxCheck = () => {
        setIsChecked(prev => !prev)
    }

    return (
        <>
            {/* <h2 className={styles.title}>Submit Coffee</h2> */}
            <div className={styles.shadow}>
            
            
            <form 
            id={styles.form}
            onSubmit={handleSubmit}
            >

            {/* <Card>
            <Card.Body> */}

            <label>Title ( required )</label>
                
            <input 
            id={styles.input}
            onChange={(e) => updateField(e, "name")}
            value={fields.name}
            />

            <label>Details ( required )</label>
            <textarea 
            id={styles.input}
            onChange={(e) => updateField(e, "description")}
            value={fields.description}
            />

            <label>Image Link</label>

            <input
            id={styles.input}
            onChange={(e) => updateField(e, "image")}
            value={fields.image}
            />

            <div className="form-check">
            <input
            checked={isChecked}
            className="form-check-input"
            onClick={handleBoxCheck}
            type="checkbox"
            id="defaultCheck1"
            />

            <label 
            className="form-check-label">
            I agree to <a href="/terms-conditions">Terms & Conditions</a>
            </label>
            </div>

            <button 
            id={styles.button}
            type="submit">
            Submit
            </button>   

            {/* </Card.Body>
            </Card> */}
            </form>
            </div>
            
        </>
    )};

export default Form;