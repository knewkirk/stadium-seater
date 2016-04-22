import React, { Component, PropTypes } from 'react';
import Grid from '../grid.jsx';
import ResultsPane from '../results-pane/results-pane.jsx';

// This is the seating grid and results list pane,
//  which handles only result clicking interactions
export default class ResultsSection extends Component {

    static propTypes = {
        defaultRows: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.shape({
                    isTaken: PropTypes.bool.isRequired,
                    isMatch: PropTypes.bool.isRequired,
                    isHighlighted: PropTypes.bool.isRequired,
                }).isRequired
            ).isRequired
        ).isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            rows: props.defaultRows
        }
    }

    // Keep current rows in sync when updated from above
    componentWillReceiveProps(nextProps) {
        this.setState({ rows: nextProps.defaultRows });
    }

    handleResultClick = (rowNum, seatNum, length) => {
        const { rows } = this.state;
        let rowsCopy = rows.slice();

        rowsCopy.forEach(row => row.forEach(seat => seat.isHighlighted = false));
        for (let i = length; i > 0; i--) {
            rowsCopy[rowNum][seatNum + i - 1].isHighlighted = true;
        }

        this.setState({ rows: rowsCopy });
    };

    render() {
        const { availableSets, showError } = this.props;
        const { rows } = this.state;

        return (
            <section className='results-section'>
                <Grid rows={ rows } />
                <ResultsPane
                    availableSets={ availableSets }
                    showError={ showError }
                    resultClickHandler={ this.handleResultClick }
                />
            </section>
        );
    }
}
