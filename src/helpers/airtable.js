import axios from 'axios';

export const AIRTABLE_API = process.env.REACT_APP_AIRTABLE_BASE;
export const AIRTABLE_CONFIG = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
    }};

export const getCoffees = async () => {
    return await axios.get(AIRTABLE_API, AIRTABLE_CONFIG);
}

export const updateCoffee = () => {

}

export const getCoffee = () => {
    
}