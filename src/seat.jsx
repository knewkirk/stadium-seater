import React, { PropTypes } from 'react';

import './seat.scss';

const Seat = ({ isTaken, isMatch, isHighlighted }) =>
    <span className={`seat ${ isTaken ? 'is-taken' : '' } ${ isMatch ? 'is-match' : '' } ${ isHighlighted ? 'is-highlighted' : ''}`}>
    </span>

Seat.displayName = 'Seat';

Seat.propTypes = {
    isHighlighted: PropTypes.bool.isRequired,
    isMatch: PropTypes.bool.isRequired,
    isTaken: PropTypes.bool.isRequired,
}

export default Seat;
