export const AIRTABLE_API = process.env.REACT_APP_AIRTABLE_BASE;
// const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;

export const AIRTABLE_CONFIG = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
    }};
