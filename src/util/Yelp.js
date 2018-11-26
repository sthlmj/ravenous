//communication with yelp API

const apiKey = 'OgATkVfCDwgNrMPPk1J3TMtnStmoXciwXKnnZsJRKJdjiUqo5EMsuMBarYvLq0cuN97-LL3lGB8iCO07yoetUjKnvZ6N6rQeU-YkxEjn45mEkQpYLWZXxR-ojt37W3Yx';

//yelp object to store functionality needed to interact with Yelp
const Yelp = {
    search(term, location, sortBy) {

        //bypass cross-origin resource sharing (CORS) with cors-anywhere
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                Authorization: `Bearer ${apiKey}`
            }
            //convert response to JSON with .then()
        }).then(response => {
            return response.json(); //TODO: retrieve lists of businesses from the converted json response 1 5 % 1 6.
        }).then();
    }
}