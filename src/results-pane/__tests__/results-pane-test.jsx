import React from 'react';
import utils from 'react-addons-test-utils';

import ResultsPane from '../results-pane.jsx';

describe('ResultsPane', () => {

    it('should render standard result set without problems', () => {
        const component = utils.renderIntoDocument(
            <ResultsPane
                availableSets={ [
                    [{ rowNum: 0, colNum: 0 }, { rowNum: 0, colNum: 1}],
                    [{ rowNum: 1, colNum: 2 }, { rowNum: 1, colNum: 3}],
                ] }
            />
        );

        const listEl = utils.findRenderedDOMComponentWithClass(
            component, 'results-pane'
        );
        const listItemEls = listEl.querySelectorAll('li');

        assert.equal(listItemEls.length, 2);
        assert.equal(listItemEls[0].title, 'Row: 1, Seats: 1, 2');
        assert.equal(listItemEls[1].title, 'Row: 2, Seats: 3, 4');
    });

    it('should render error element instead when showError is true', () => {
        const component = utils.renderIntoDocument(
            <ResultsPane
                availableSets={ [[{ rowNum: 0, colNum: 0 }]] }
                showError={ true }
            />
        );

        utils.findRenderedDOMComponentWithClass(component, 'results-pane is-error');
    });

    it('should render helpful hint element instead when availableSets is empty', () => {
        const component = utils.renderIntoDocument(
            <ResultsPane
                availableSets={ [] }
            />
        );

        const helpfulEl = utils.findRenderedDOMComponentWithClass(component, 'results-pane');

        assert.notEqual(helpfulEl.innerText.indexOf('Click "GO"'), -1);
    });

    describe('result item click', () => {

        it('should set selected to the target, and call the passed in function', () => {
            const component = utils.renderIntoDocument(
                <ResultsPane
                    availableSets={ [[{ rowNum: 0, colNum: 0 }]] }
                    resultClickHandler={ sinon.mock().once().withArgs(0, 0, 1) }
                />
            );
            assert.equal(component.state.selectedSetNum, -1);

            const listItemEl = utils.findRenderedDOMComponentWithTag(component, 'li');
            utils.Simulate.click(listItemEl);

            assert.equal(component.state.selectedSetNum, 0);
        });

    });

});
