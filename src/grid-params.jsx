import React, { PropTypes } from 'react';
import Slider from './slider.jsx';

import './grid-params.scss';

const GridParams = ({ numRows, numColumns, rowSliderChangeHandler, columnSliderChangeHandler, fillFormSubmitHandler }) =>
    <section className='grid-params'>
        <Slider
            min={ 1 } max={ 20 }
            label={`${ numRows } Rows`}
            onChange={ rowSliderChangeHandler }
        />
        <Slider
            min={ 1 } max={ 50 }
            label={`${ numColumns } Columns`}
            onChange={ columnSliderChangeHandler }
        />
        <form className='fill-form' onSubmit={ fillFormSubmitHandler }>
            Fill <input type='text' defaultValue={ 50 } />% of the seats
            <button type='submit'>GO</button>
        </form>
    </section>

GridParams.displayName = 'GridParams';

GridParams.PropTypes = {
    columnSliderChangeHandler: PropTypes.func.isRequired,
    fillFormSubmitHandler: PropTypes.func.isRequired,
    numColumns: PropTypes.number.isRequired,
    numRows: PropTypes.number.isRequired,
    rowSliderChangeHandler: PropTypes.func.isRequired,
};

export default GridParams;
