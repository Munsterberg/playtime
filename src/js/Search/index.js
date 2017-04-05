import React from 'react';
import preload from '../../../public/data.json';

import ShowCard from '../ShowCard';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        this._handleChange = this._handleChange.bind(this);
    }


    _handleChange(e) {
        this.setState({searchTerm: e.target.value});
    }

    render() {
        const {searchTerm} = this.state;
        return (
            <div className="search">
                <header>
                    <h1>Labflix!</h1>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={this._handleChange}
                        placeholder="Search"
                    />
                </header>
                <div>
                    {preload.shows
                            .filter(show => {
                                return `${show.title} ${show.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0;
                            })
                            .map(show => <ShowCard key={show.imdbID} show={show} />)}
                </div>
            </div>
        );
    }
}

export default Search;
