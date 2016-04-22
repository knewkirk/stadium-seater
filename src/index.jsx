import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeatFinder from './seat-finder/seat-finder';

class Application extends Component {
    render() {
        return <SeatFinder />;
    }
}

ReactDOM.render(<Application />, document.getElementById('content'));
