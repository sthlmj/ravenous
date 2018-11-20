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
            <img src='../../pizza.jpg' alt=''/>
            </div>
            <h2>{this.props.business.name}</h2>
            <div className="Business-information">
            <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state}</p>
            <p>{this.props.business.zipCode}</p>
            </div>
            <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount}</p>
            </div>
            </div>
            </div>
        )
    }
}

//make business component available to the rest of the Ravenous apps
export default Business;