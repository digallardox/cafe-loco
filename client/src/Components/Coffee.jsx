import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { Card, Col} from 'react-bootstrap';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/tbl1RqNOIVfRyZhso?api_key=${airtableKey}`;

const config = {
    headers: {
        Authorization: `Bearer ${airtableKey}`,
    }};

function Coffee() {
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState("");

    // Initialize Axios request
    useEffect(() => {
        const getData = async () => {
        const res = await axios.get(URL, config);
        setData(res.data.records);
        setOffset(res.data.offset);
        }
        getData();
    },[]);

   async function handlePagination() {
       console.log(offset);
   }

    return (
        <>
        <Helmet>
        <title>All Coffee</title>
        </Helmet>

        <div className="coverImgDiv">
        </div>
        <h1 id="tester">Where Coffee Meets Fun</h1>
        <h3><i id="down"></i></h3>

            <div className="allCoffee">
            <h2 className="pageTitle">All Coffee</h2>
            <div className="cardsDiv">
            {data.map((item) => {
            return (

            <div id="cards">
            <div class="shadow p-3 mb-5 bg-white rounded">
            <Col>
            <Card>
                <Card.Img variant="top" src={item.fields.image} />
                <Card.Body>
                <Card.Title>{item.fields.name}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec commodo mi, a interdum diam. Phasellus ac sapien eu nisl rutrum elementum.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </div>
            </div>
            )})}
            </div>
            <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            pageCount={4}
            onPageChange={handlePagination}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'active'}
            />
            </div>
        </>
    )};

export default Coffee;