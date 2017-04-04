import React, { PropTypes } from 'react';

const propTypes = {
    show: PropTypes.object.isRequired
};

function ShowCard({ show }) {
    return (
        <div className="show-card">
            <img src={`/public/img/posters/${show.poster}`} alt={show.title} />
            <div>
                <h3>{show.title}</h3>
                <h4>({show.year})</h4>
                <p>{show.description}</p>
            </div>
        </div>
    );
}

ShowCard.propTypes = propTypes;

export default ShowCard;
