import React from 'react';
import utils from 'react-addons-test-utils';

import SeatFinder from '../seat-finder.jsx';

describe('SeatFinder', () => {

    const shallowRenderer = utils.createRenderer();

    it('should render a default view', () => {
        shallowRenderer.render(<SeatFinder />);
        var component = shallowRenderer.getRenderOutput();

        assert.equal(component.props.children[0].type, 'h1');
        assert.equal(component.props.children[1].type.name, 'GridParams');
        assert.equal(component.props.children[2].type.name, 'ResultsSection');
        assert.equal(component.props.children[3].type.name, 'FindForm');

        const { state } = shallowRenderer.getMountedInstance();

        assert.equal(state.numRows, 10);
        assert.equal(state.numColumns, 20);
        assert.equal(state.rows.length, 10);
        assert.equal(state.rows[0].length, 20);
        assert.deepEqual(state.rows[0][0], { isTaken: false, isMatch: false, isHighlighted: false });
        assert.equal(state.availableSets.length, 0);
        assert.equal(state.showError, false);
    });

    describe('GridParams methods', () => {

        let instance;

        beforeEach(() => {
            shallowRenderer.render(<SeatFinder />);
            instance = shallowRenderer.getMountedInstance();
        });

        it('should change the rows to reflect the row slider value', function() {
            instance.handleRowSliderChange({ target: { value: 8 }});

            assert.equal(instance.state.numRows, 8);
            assert.equal(instance.state.rows.length, 8);
            assert.equal(instance.state.availableSets.length, 0);
            assert.equal(instance.state.showError, false);
        });

        it('should change the columns to reflect the column slider value', function() {
            instance.handleColumnSliderChange({ target: { value: 52 }});

            assert.equal(instance.state.numColumns, 52);
            assert.equal(instance.state.rows[0].length, 52);
            assert.equal(instance.state.availableSets.length, 0);
            assert.equal(instance.state.showError, false);
        });

        it('should fill the grid randomly when the fill form is submitted', function() {
            instance.handleFillFormSubmit({
                preventDefault: sinon.mock().once(),
                stopPropagation: sinon.mock().once(),
                target: {
                    // Approximately 75% of the seats should be taken
                    querySelector: () => ({ value: 75 })
                }
            });

            let takenCount = 0;
            let notTakenCount = 0;
            instance.state.rows.forEach(row =>
                row.forEach(seat => {
                    seat.isTaken ? takenCount++ : notTakenCount++;
                    assert.notOk(seat.isMatch);
                })
            );

            // So we just make sure that there are more taken than not taken
            assert.ok(takenCount > notTakenCount);
            assert.equal(instance.state.availableSets.length, 0);
            assert.notOk(instance.state.showError);
        });

    });

    describe('FindForm methods', () => {

        let instance;
        const rest = { isMatch: false, isHighlighted: false };
        const takenSeat = { isTaken: true, ...rest };
        const openSeat = { isTaken: false, ...rest };

        const getEvent = value => ({
            preventDefault: sinon.mock().once(),
            stopPropagation: sinon.mock().once(),
            target: {
                querySelector: () => ({ value: value })
            }
        });

        beforeEach(() => {
            shallowRenderer.render(<SeatFinder />);
            instance = shallowRenderer.getMountedInstance();

            let rows = [
                [ takenSeat, takenSeat, openSeat, openSeat, openSeat, takenSeat ], // 3 open
                [ openSeat, takenSeat, openSeat, takenSeat, openSeat, takenSeat ], // nothing
                [ takenSeat, takenSeat, openSeat, openSeat, openSeat, openSeat ], // 2 sets of 3
            ];
            instance.setState({ rows });
        });

        it('should find open adjacent seats', () => {
            instance.handleFindFormSubmit(getEvent(3));

            assert.equal(instance.state.availableSets.length, 3);
            assert.equal(instance.state.availableSets[0][0].rowNum, 0);
            assert.equal(instance.state.availableSets[0][0].colNum, 2);
            assert.ok(instance.state.rows[0][2].isMatch);
            assert.ok(instance.state.rows[0][3].isMatch);
            assert.ok(instance.state.rows[0][4].isMatch);
            assert.notOk(instance.state.showError);
        });

        it('should show an error if no seats were found', () => {
            instance.handleFindFormSubmit(getEvent(5));

            assert.equal(instance.state.availableSets.length, 0);
            assert.ok(instance.state.showError);
        });

    });

});
