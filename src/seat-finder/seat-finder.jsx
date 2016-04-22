import React, { Component } from 'react';

import FindForm from '../find-form.jsx';
import GridParams from '../grid-params.jsx';
import ResultsSection from '../results-section/results-section.jsx';

import './seat-finder.scss';

export default class SeatFinder extends Component {

    constructor() {
        super();
        this.state = {
            availableSets: [],
            numColumns: 20,
            numRows: 10,
            rows: this.getDefaultRows(10, 20),
            showError: false,
        };
    }

    getDefaultRows(numRows, numColumns) {
        let rows = [];
        for (let i = 0; i < numRows; i++) {
            let row = [];
            for (let j = 0; j < numColumns; j++) {
                row.push({
                    isHighlighted: false,
                    isMatch: false,
                    isTaken: false,
                });
            }
            rows.push(row);
        }

        return rows;
    }

    handleRowSliderChange = event => {
        const { numColumns } = this.state;
        const numRows = event.target.value;
        const newRows = this.getDefaultRows(numRows, numColumns);
        this.setState({
            availableSets: [],
            numRows,
            rows: newRows,
            showError: false,
        });
    };

    handleColumnSliderChange = event => {
        const { numRows } = this.state;
        const numColumns = event.target.value;
        const newRows = this.getDefaultRows(numRows, numColumns);
        this.setState({
            availableSets: [],
            numColumns,
            rows: newRows,
            showError: false,
        });
    };

    handleFillFormSubmit = event => {
        const { rows } = this.state;
        const rowsCopy = rows.slice();
        const percentToFill = event.target.querySelector('input').value;

        rowsCopy.forEach(row => row.forEach(seat => {
            seat.isMatch = seat.isHighlighted = false;
            seat.isTaken = Math.random() * 100 < percentToFill;
        }));

        this.setState({
            availableSets: [],
            rows: rowsCopy,
            showError: false,
        });

        event.preventDefault();
        event.stopPropagation();
    };

    handleFindFormSubmit = event => {
        const { rows } = this.state;
        const desiredSeats = event.target.querySelector('input').value;
        let rowsCopy = rows.slice();
        let availableSets = [];

        // Clear current matches
        rowsCopy.forEach(row => row.forEach(seat =>
            seat.isMatch = seat.isHighlighted = false
        ));

        // Iterate through all the seats in all the rows
        rowsCopy.forEach((row, i) => row.forEach((seat, j) => {
            // Find the first open seat
            if (seat.isTaken) return;

            // Count the following consecutive open seats
            let count = 1;
            while (row[j + count] && !row[j + count].isTaken && count < desiredSeats) {
                count++;
            }

            // If we've found the desired amount of consecutive seats, save the set
            if (count == desiredSeats) {
                let set = [];
                while (--count >= 0) {
                    row[j + count].isMatch = true;
                    set.push({ rowNum: i, colNum: j + count });
                }
                set.reverse();
                availableSets.push(set);
            }
        }));

        const showError = !availableSets.length;

        this.setState({ availableSets, showError, rows: rowsCopy });

        event.preventDefault();
        event.stopPropagation();
    };

    render() {
        const { rows, numRows, numColumns, availableSets, showError } = this.state;
        return (
            <div>
                <h1>Seat Finder</h1>
                <GridParams
                    numRows={ numRows }
                    numColumns={ numColumns }
                    rowSliderChangeHandler={ this.handleRowSliderChange }
                    columnSliderChangeHandler={ this.handleColumnSliderChange }
                    fillFormSubmitHandler={ this.handleFillFormSubmit }
                />
                <ResultsSection
                    defaultRows={ rows }
                    availableSets={ availableSets }
                    showError={ showError }
                />
                <FindForm findFormSubmitHandler={ this.handleFindFormSubmit } />
            </div>
        );
    }
}
