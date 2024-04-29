import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Card, Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { AIRTABLE_API, AIRTABLE_CONFIG } from '../../helpers/airtable';
import { getCoffees } from '../../helpers/airtable';
import { sortVotes } from '../../utils/sort';
import styles from "./CoffeeRank.module.css"

const ACCESS_TOKEN = localStorage.getItem("accessToken")

const CoffeeRank = () => {
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const coffees = await getCoffees()
            const sortedCoffees = await sortVotes(coffees)
            setData(sortedCoffees)
        }
        getData();
    },[toggle]);


const upVote = async (id, votes) => {
    if (!ACCESS_TOKEN){
        alert("please log in to vote")
        return
    }
        await axios.patch(`${AIRTABLE_API}/${id}`, {fields: {votes: votes + 1}}, AIRTABLE_CONFIG);
        localStorage.removeItem("allCoffee")
        setToggle(toggle => !toggle);
    };

const downVote = async (id, votes) => {
    if (!ACCESS_TOKEN){
        alert("please log in to vote")
        return
    }
        await axios.patch(`${AIRTABLE_API}/${id}`, {fields: {votes: votes - 1}}, AIRTABLE_CONFIG);
        localStorage.removeItem("allCoffee")
        setToggle(toggle => !toggle);
    };

    return (
        <>
            <h2 className="pageTitle">Coffee Ranking</h2>
            <div id="container">
            {data.map((item, index) => (
            <div id={styles.gridParent}>
            {/* <div class="shadow p-3 mb-5 bg-white rounded"> */}
                <div id={styles.circle}>
                <h5 id="rankNumber"><em>#{index +1}</em></h5>
                </div>

                
                <div id={styles.cardContent}>
                <img
                 id={styles.img}
                 src={item.fields.image}/>

                <div id={styles.cardText}>
                <div
                id={styles.cardTitle}
                >{item.fields.name}</div>
                
                
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec commodo mi, a interdum diam. Phasellus ac sapien eu nisl rutrum elementum.
                </div>
                <div>
                <p>{item.fields.votes} likes</p>
                <button type="submit"
                id="voteButton"
                onClick={()=> upVote(item.id, item.fields.votes)}>
                + upvote
                </button>
                <button type="submit"
                id="voteButton"
                onClick={()=> downVote(item.id, item.fields.votes)}>
                - downvote
                </button>
                </div>
                <hr />
            </div>
            </div>
            ))}
            </div>
        </>
    )};

export default CoffeeRank;