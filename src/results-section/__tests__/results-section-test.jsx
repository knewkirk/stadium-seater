import React from 'react';
import utils from 'react-addons-test-utils';

import ResultsSection from '../results-section.jsx';

describe('ResultsSection', () => {

    const shallowRenderer = utils.createRenderer();

    it('should render a default view', () => {
        const defaultRows = [[{ isMatch: false, isTaken: false, isHighlighted: false }]];
        shallowRenderer.render(<ResultsSection defaultRows={ defaultRows } />);
        var component = shallowRenderer.getRenderOutput();

        assert.equal(component.props.children[0].type.name, 'Grid');
        assert.equal(component.props.children[1].type.name, 'ResultsPane');

        const { state } = shallowRenderer.getMountedInstance();

        assert.equal(state.rows, defaultRows);
    });

    describe('handleResultClick', () => {

        let instance;

        beforeEach(() => {
            let highlightedSeat = { isHighlighted: true, isMatch: true, isTaken: false };
            let notHighlightedSeat = { isHighlighted: false, isMatch: true, isTaken: false };
            let defaultRows = [
                [ highlightedSeat, highlightedSeat, notHighlightedSeat, notHighlightedSeat ]
            ]
            shallowRenderer.render(<ResultsSection defaultRows={ defaultRows } />);

            instance = shallowRenderer.getMountedInstance();
        });

        it('should remove existing highlights and add new ones', () => {
            instance.handleResultClick(0, 2, 2); // click on set of 2 seats starting with seat #2 in row #0

            assert.notOk(instance.state.rows[0][0].isHighlighted);
            assert.notOk(instance.state.rows[0][1].isHighlighted);
            assert.ok(instance.state.rows[0][2].isHighlighted);
            assert.ok(instance.state.rows[0][3].isHighlighted);
        });

    });

});
