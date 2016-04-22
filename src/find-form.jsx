import React, { PropTypes } from 'react';

const FindForm = ({ findFormSubmitHandler }) =>
    <section className='find-form'>
        <form onSubmit={ findFormSubmitHandler }>
            Get <input type='text' defaultValue={ 4 } /> adjacent seats
            <button type='submit'>GO</button>
        </form>
    </section>

FindForm.displayName = 'FindForm';

FindForm.propTypes = {
    findFormSubmitHandler: PropTypes.func.isRequired,
};

export default FindForm;
