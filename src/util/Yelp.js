//communication with yelp API

const apiKey = 'MY-YELP-API-KEY';

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
            return response.json();
            //retrieve lists of businesses from the converted json response passing in callback function with jsonResponse param
        }).then(jsonResponse => {
            //check if jsonResponse has businesses keyword = valid Yelp API returns, return array
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;