import React, { PropTypes } from 'react';

import './slider.scss';

const Slider = ({ label, className = '', min = 1, max = 50, onChange }) =>
    <label className='slider-container'>
        { label ? <p>{ label }</p> : null }
        <input
            type='range'
            min={ min }
            max={ max }
            onChange={ onChange }
        />
    </label>

Slider.displayName = 'Slider';

Slider.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
};

export default Slider;
