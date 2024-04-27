export const sortVotes = async (data) => {
    return data.sort(
        (coffeeOne, coffeeTwo)=> {
        if (coffeeOne.fields.votes > coffeeTwo.fields.votes) {
        return -1;
        }});
    }