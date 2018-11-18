/*
The purpose of the <Business /> component is to represent how a business (a restaurant) in Ravenous will be formatted and styled.
 */

import React from 'react';
import './Business.css';



//make react component class
class Business extends React.Component {
    render() {
        return (
            <div className="Business">
            <div className="image-container">
            <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
            <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state}</p>
            <p>{business.zipCode}</p>
            </div>
            <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating}</h3>
            <p>{business.reviewCount}</p>
            </div>
            </div>
            </div>
        )
    }
}

//make business component available to the rest of the Ravenous apps
export default Business;