import React, { Component, PropTypes } from 'react';

import './results-pane.scss';

export default class ResultsPane extends Component {

    static propTypes = {
        availableSets: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.shape({
                    rowNum: PropTypes.number.isRequired,
                    colNum: PropTypes.number.isRequired,
                })
            )
        ),
        resultClickHandler: PropTypes.func,
        showError: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedSetNum: -1,
        };
    }

    handleResultClick = (setNum, rowNum, colNum, length) => () => {
        const { resultClickHandler } = this.props;

        this.setState({ selectedSetNum: setNum });

        resultClickHandler(rowNum, colNum, length);
    }

    render() {
        const { showError, availableSets } = this.props;
        const { selectedSetNum } = this.state;

        return (
            showError
                ? <div className='results-pane is-error'>
                    Sorry, we couldn't find that many seats.
                </div>
                : availableSets.length
                    ? <ul className='results-pane'>
                    {
                        availableSets.map((set, i) => {
                            // Convert to 1-indexed numbers for readability
                            const itemText = `Row: ${ set[0].rowNum + 1 }, Seats: ${ set.map(seat => seat.colNum + 1).join(', ') }`;
                            return (
                                <li
                                    key={ i }
                                    title={ itemText }
                                    className={`${ i === selectedSetNum ? 'is-selected' : '' }`}
                                    onClick={ this.handleResultClick(i, set[0].rowNum, set[0].colNum, set.length) }
                                >
                                    { itemText }
                                </li>
                            );
                        })
                    }
                    </ul>
                    : <div className='results-pane'>
                        Click "GO" at the bottom to show available.
                    </div>
        );
    }

}
