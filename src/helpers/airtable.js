import axios from 'axios';

export const AIRTABLE_API = process.env.REACT_APP_AIRTABLE_BASE;
export const AIRTABLE_CONFIG = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
    }};

export const getCoffees = async () => {
    // const existingData = localStorage.getItem("allCoffee")
    // if (existingData) {
    //     return JSON.parse(existingData)
    // }
    const res = await axios.get(AIRTABLE_API, AIRTABLE_CONFIG)
    const nodes = res.data.records
    // localStorage.setItem("allCoffee", JSON.stringify(nodes))
    return nodes
}

// export const updateCoffee = () => {

// }

// export const getCoffee = () => {
    
// }