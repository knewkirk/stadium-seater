import React, { PropTypes } from 'react';
import Seat from './seat.jsx';

const Row = ({ seats }) =>
    <div className='row'>
    {
        seats.map((seat, i) =>
            <Seat
                key={ i }
                isTaken={ seat.isTaken }
                isMatch={ seat.isMatch }
                isHighlighted={ seat.isHighlighted }
            />
        )
    }
    </div>

Row.displayName = 'Row';

Row.propTypes = {
    seats: PropTypes.arrayOf(
        PropTypes.shape({
            isTaken: PropTypes.bool.isRequired,
            isMatch: PropTypes.bool.isRequired,
            isHighlighted: PropTypes.bool.isRequired,
        })
    )
};

export default Row;
