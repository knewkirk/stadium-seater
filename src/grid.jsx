import React, { PropTypes } from 'react';
import Row from './row.jsx';

import './grid.scss';

const Grid = ({ rows }) =>
    <div className='grid'>
    {
        rows.map((seats, i) =>
            <Row key={ i } seats={ seats } />
        )
    }
    </div>

Grid.displayName = 'Grid';

Grid.propTypes = {
    rows: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                isTaken: PropTypes.bool.isRequired,
                isMatch: PropTypes.bool.isRequired,
                isHighlighted: PropTypes.bool.isRequired,
            })
        )
    )
};

export default Grid;
