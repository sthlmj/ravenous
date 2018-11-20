import React from 'react';
import './SearchBar.css';

//make js object
const sortByOptions = {
    'Best Match' : 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'most_viewed',
};
    //TODO 6: Check warning
    getSortByClass(sortByOptions) {
        if (this.state == sortByOptions) {
            return 'active'
        } else {
            ''
        }
    };

    //TODO:7 update state by calling setState()
    handleSortByChange(sortByOptions) {

};

//make search bar react component
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        };
    }
    /*Dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed).
    This is to help future proof against potential changes to the Yelp API.*/
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;