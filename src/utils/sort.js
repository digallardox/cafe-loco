export const sortVotes = async ({data}) => {
    const nodes = data.records
    return nodes.sort(
        (coffeeOne, coffeeTwo)=> {
        if (coffeeOne.fields.votes > coffeeTwo.fields.votes) {
        return -1;
        }});
    }