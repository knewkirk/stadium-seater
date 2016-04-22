/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _seatFinder = __webpack_require__(3);

	var _seatFinder2 = _interopRequireDefault(_seatFinder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Application = function (_Component) {
	    _inherits(Application, _Component);

	    function Application() {
	        _classCallCheck(this, Application);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Application).apply(this, arguments));
	    }

	    _createClass(Application, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_seatFinder2.default, null);
	        }
	    }]);

	    return Application;
	}(_react.Component);

	_reactDom2.default.render(_react2.default.createElement(Application, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _findForm = __webpack_require__(4);

	var _findForm2 = _interopRequireDefault(_findForm);

	var _gridParams = __webpack_require__(5);

	var _gridParams2 = _interopRequireDefault(_gridParams);

	var _resultsSection = __webpack_require__(13);

	var _resultsSection2 = _interopRequireDefault(_resultsSection);

	__webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SeatFinder = function (_Component) {
	    _inherits(SeatFinder, _Component);

	    function SeatFinder() {
	        _classCallCheck(this, SeatFinder);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SeatFinder).call(this));

	        _this.handleRowSliderChange = function (event) {
	            var numColumns = _this.state.numColumns;

	            var numRows = event.target.value;
	            var newRows = _this.getDefaultRows(numRows, numColumns);
	            _this.setState({
	                availableSets: [],
	                numRows: numRows,
	                rows: newRows,
	                showError: false
	            });
	        };

	        _this.handleColumnSliderChange = function (event) {
	            var numRows = _this.state.numRows;

	            var numColumns = event.target.value;
	            var newRows = _this.getDefaultRows(numRows, numColumns);
	            _this.setState({
	                availableSets: [],
	                numColumns: numColumns,
	                rows: newRows,
	                showError: false
	            });
	        };

	        _this.handleFillFormSubmit = function (event) {
	            var rows = _this.state.rows;

	            var rowsCopy = rows.slice();
	            var percentToFill = event.target.querySelector('input').value;

	            rowsCopy.forEach(function (row) {
	                return row.forEach(function (seat) {
	                    seat.isMatch = seat.isHighlighted = false;
	                    seat.isTaken = Math.random() * 100 < percentToFill;
	                });
	            });

	            _this.setState({
	                availableSets: [],
	                rows: rowsCopy,
	                showError: false
	            });

	            event.preventDefault();
	            event.stopPropagation();
	        };

	        _this.handleFindFormSubmit = function (event) {
	            var rows = _this.state.rows;

	            var desiredSeats = event.target.querySelector('input').value;
	            var rowsCopy = rows.slice();
	            var availableSets = [];

	            // Clear current matches
	            rowsCopy.forEach(function (row) {
	                return row.forEach(function (seat) {
	                    return seat.isMatch = seat.isHighlighted = false;
	                });
	            });

	            // Iterate through all the seats in all the rows
	            rowsCopy.forEach(function (row, i) {
	                return row.forEach(function (seat, j) {
	                    // Find the first open seat
	                    if (seat.isTaken) return;

	                    // Count the following consecutive open seats
	                    var count = 1;
	                    while (row[j + count] && !row[j + count].isTaken && count < desiredSeats) {
	                        count++;
	                    }

	                    // If we've found the desired amount of consecutive seats, save the set
	                    if (count == desiredSeats) {
	                        var set = [];
	                        while (--count >= 0) {
	                            row[j + count].isMatch = true;
	                            set.push({ rowNum: i, colNum: j + count });
	                        }
	                        set.reverse();
	                        availableSets.push(set);
	                    }
	                });
	            });

	            var showError = !availableSets.length;

	            _this.setState({ availableSets: availableSets, showError: showError, rows: rowsCopy });

	            event.preventDefault();
	            event.stopPropagation();
	        };

	        _this.state = {
	            availableSets: [],
	            numColumns: 20,
	            numRows: 10,
	            rows: _this.getDefaultRows(10, 20),
	            showError: false
	        };
	        return _this;
	    }

	    _createClass(SeatFinder, [{
	        key: 'getDefaultRows',
	        value: function getDefaultRows(numRows, numColumns) {
	            var rows = [];
	            for (var i = 0; i < numRows; i++) {
	                var row = [];
	                for (var j = 0; j < numColumns; j++) {
	                    row.push({
	                        isHighlighted: false,
	                        isMatch: false,
	                        isTaken: false
	                    });
	                }
	                rows.push(row);
	            }

	            return rows;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var rows = _state.rows;
	            var numRows = _state.numRows;
	            var numColumns = _state.numColumns;
	            var availableSets = _state.availableSets;
	            var showError = _state.showError;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Seat Finder'
	                ),
	                _react2.default.createElement(_gridParams2.default, {
	                    numRows: numRows,
	                    numColumns: numColumns,
	                    rowSliderChangeHandler: this.handleRowSliderChange,
	                    columnSliderChangeHandler: this.handleColumnSliderChange,
	                    fillFormSubmitHandler: this.handleFillFormSubmit
	                }),
	                _react2.default.createElement(_resultsSection2.default, {
	                    defaultRows: rows,
	                    availableSets: availableSets,
	                    showError: showError
	                }),
	                _react2.default.createElement(_findForm2.default, { findFormSubmitHandler: this.handleFindFormSubmit })
	            );
	        }
	    }]);

	    return SeatFinder;
	}(_react.Component);

	exports.default = SeatFinder;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FindForm = function FindForm(_ref) {
	    var findFormSubmitHandler = _ref.findFormSubmitHandler;
	    return _react2.default.createElement(
	        'section',
	        { className: 'find-form' },
	        _react2.default.createElement(
	            'form',
	            { onSubmit: findFormSubmitHandler },
	            'Get ',
	            _react2.default.createElement('input', { type: 'text', defaultValue: 4 }),
	            ' adjacent seats',
	            _react2.default.createElement(
	                'button',
	                { type: 'submit' },
	                'GO'
	            )
	        )
	    );
	};

	FindForm.displayName = 'FindForm';

	FindForm.propTypes = {
	    findFormSubmitHandler: _react.PropTypes.func.isRequired
	};

	exports.default = FindForm;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _slider = __webpack_require__(6);

	var _slider2 = _interopRequireDefault(_slider);

	__webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GridParams = function GridParams(_ref) {
	    var numRows = _ref.numRows;
	    var numColumns = _ref.numColumns;
	    var rowSliderChangeHandler = _ref.rowSliderChangeHandler;
	    var columnSliderChangeHandler = _ref.columnSliderChangeHandler;
	    var fillFormSubmitHandler = _ref.fillFormSubmitHandler;
	    return _react2.default.createElement(
	        'section',
	        { className: 'grid-params' },
	        _react2.default.createElement(_slider2.default, {
	            min: 1, max: 20,
	            label: numRows + ' Rows',
	            onChange: rowSliderChangeHandler
	        }),
	        _react2.default.createElement(_slider2.default, {
	            min: 1, max: 50,
	            label: numColumns + ' Columns',
	            onChange: columnSliderChangeHandler
	        }),
	        _react2.default.createElement(
	            'form',
	            { className: 'fill-form', onSubmit: fillFormSubmitHandler },
	            'Fill ',
	            _react2.default.createElement('input', { type: 'text', defaultValue: 50 }),
	            '% of the seats',
	            _react2.default.createElement(
	                'button',
	                { type: 'submit' },
	                'GO'
	            )
	        )
	    );
	};

	GridParams.displayName = 'GridParams';

	GridParams.PropTypes = {
	    columnSliderChangeHandler: _react.PropTypes.func.isRequired,
	    fillFormSubmitHandler: _react.PropTypes.func.isRequired,
	    numColumns: _react.PropTypes.number.isRequired,
	    numRows: _react.PropTypes.number.isRequired,
	    rowSliderChangeHandler: _react.PropTypes.func.isRequired
	};

	exports.default = GridParams;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Slider = function Slider(_ref) {
	    var label = _ref.label;
	    var _ref$className = _ref.className;
	    var className = _ref$className === undefined ? '' : _ref$className;
	    var _ref$min = _ref.min;
	    var min = _ref$min === undefined ? 1 : _ref$min;
	    var _ref$max = _ref.max;
	    var max = _ref$max === undefined ? 50 : _ref$max;
	    var onChange = _ref.onChange;
	    return _react2.default.createElement(
	        'label',
	        { className: 'slider-container' },
	        label ? _react2.default.createElement(
	            'p',
	            null,
	            label
	        ) : null,
	        _react2.default.createElement('input', {
	            type: 'range',
	            min: min,
	            max: max,
	            onChange: onChange
	        })
	    );
	};

	Slider.displayName = 'Slider';

	Slider.propTypes = {
	    label: _react.PropTypes.string,
	    className: _react.PropTypes.string,
	    min: _react.PropTypes.number,
	    max: _react.PropTypes.number,
	    onChange: _react.PropTypes.func
	};

	exports.default = Slider;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _grid = __webpack_require__(14);

	var _grid2 = _interopRequireDefault(_grid);

	var _resultsPane = __webpack_require__(21);

	var _resultsPane2 = _interopRequireDefault(_resultsPane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// This is the seating grid and results list pane,
	//  which handles only result clicking interactions

	var ResultsSection = function (_Component) {
	    _inherits(ResultsSection, _Component);

	    function ResultsSection(props) {
	        _classCallCheck(this, ResultsSection);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResultsSection).call(this, props));

	        _this.handleResultClick = function (rowNum, seatNum, length) {
	            var rows = _this.state.rows;

	            var rowsCopy = rows.slice();

	            rowsCopy.forEach(function (row) {
	                return row.forEach(function (seat) {
	                    return seat.isHighlighted = false;
	                });
	            });
	            for (var i = length; i > 0; i--) {
	                rowsCopy[rowNum][seatNum + i - 1].isHighlighted = true;
	            }

	            _this.setState({ rows: rowsCopy });
	        };

	        _this.state = {
	            rows: props.defaultRows
	        };
	        return _this;
	    }

	    // Keep current rows in sync when updated from above


	    _createClass(ResultsSection, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({ rows: nextProps.defaultRows });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var availableSets = _props.availableSets;
	            var showError = _props.showError;
	            var rows = this.state.rows;


	            return _react2.default.createElement(
	                'section',
	                { className: 'results-section' },
	                _react2.default.createElement(_grid2.default, { rows: rows }),
	                _react2.default.createElement(_resultsPane2.default, {
	                    availableSets: availableSets,
	                    showError: showError,
	                    resultClickHandler: this.handleResultClick
	                })
	            );
	        }
	    }]);

	    return ResultsSection;
	}(_react.Component);

	ResultsSection.propTypes = {
	    defaultRows: _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.shape({
	        isTaken: _react.PropTypes.bool.isRequired,
	        isMatch: _react.PropTypes.bool.isRequired,
	        isHighlighted: _react.PropTypes.bool.isRequired
	    }).isRequired).isRequired).isRequired
	};
	exports.default = ResultsSection;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _row = __webpack_require__(15);

	var _row2 = _interopRequireDefault(_row);

	__webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Grid = function Grid(_ref) {
	    var rows = _ref.rows;
	    return _react2.default.createElement(
	        'div',
	        { className: 'grid' },
	        rows.map(function (seats, i) {
	            return _react2.default.createElement(_row2.default, { key: i, seats: seats });
	        })
	    );
	};

	Grid.displayName = 'Grid';

	Grid.propTypes = {
	    rows: _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.shape({
	        isTaken: _react.PropTypes.bool.isRequired,
	        isMatch: _react.PropTypes.bool.isRequired,
	        isHighlighted: _react.PropTypes.bool.isRequired
	    })))
	};

	exports.default = Grid;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _seat = __webpack_require__(16);

	var _seat2 = _interopRequireDefault(_seat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Row = function Row(_ref) {
	    var seats = _ref.seats;
	    return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        seats.map(function (seat, i) {
	            return _react2.default.createElement(_seat2.default, {
	                key: i,
	                isTaken: seat.isTaken,
	                isMatch: seat.isMatch,
	                isHighlighted: seat.isHighlighted
	            });
	        })
	    );
	};

	Row.displayName = 'Row';

	Row.propTypes = {
	    seats: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        isTaken: _react.PropTypes.bool.isRequired,
	        isMatch: _react.PropTypes.bool.isRequired,
	        isHighlighted: _react.PropTypes.bool.isRequired
	    }))
	};

	exports.default = Row;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Seat = function Seat(_ref) {
	    var isTaken = _ref.isTaken;
	    var isMatch = _ref.isMatch;
	    var isHighlighted = _ref.isHighlighted;
	    return _react2.default.createElement('span', { className: 'seat ' + (isTaken ? 'is-taken' : '') + ' ' + (isMatch ? 'is-match' : '') + ' ' + (isHighlighted ? 'is-highlighted' : '') });
	};

	Seat.displayName = 'Seat';

	Seat.propTypes = {
	    isHighlighted: _react.PropTypes.bool.isRequired,
	    isMatch: _react.PropTypes.bool.isRequired,
	    isTaken: _react.PropTypes.bool.isRequired
	};

	exports.default = Seat;

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResultsPane = function (_Component) {
	    _inherits(ResultsPane, _Component);

	    function ResultsPane(props) {
	        _classCallCheck(this, ResultsPane);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResultsPane).call(this, props));

	        _this.handleResultClick = function (setNum, rowNum, colNum, length) {
	            return function () {
	                var resultClickHandler = _this.props.resultClickHandler;


	                _this.setState({ selectedSetNum: setNum });

	                resultClickHandler(rowNum, colNum, length);
	            };
	        };

	        _this.state = {
	            selectedSetNum: -1
	        };
	        return _this;
	    }

	    _createClass(ResultsPane, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var showError = _props.showError;
	            var availableSets = _props.availableSets;
	            var selectedSetNum = this.state.selectedSetNum;


	            return showError ? _react2.default.createElement(
	                'div',
	                { className: 'results-pane is-error' },
	                'Sorry, we couldn\'t find that many seats.'
	            ) : availableSets.length ? _react2.default.createElement(
	                'ul',
	                { className: 'results-pane' },
	                availableSets.map(function (set, i) {
	                    // Convert to 1-indexed numbers for readability
	                    var itemText = 'Row: ' + (set[0].rowNum + 1) + ', Seats: ' + set.map(function (seat) {
	                        return seat.colNum + 1;
	                    }).join(', ');
	                    return _react2.default.createElement(
	                        'li',
	                        {
	                            key: i,
	                            title: itemText,
	                            className: '' + (i === selectedSetNum ? 'is-selected' : ''),
	                            onClick: _this2.handleResultClick(i, set[0].rowNum, set[0].colNum, set.length)
	                        },
	                        itemText
	                    );
	                })
	            ) : _react2.default.createElement(
	                'div',
	                { className: 'results-pane' },
	                'Click "GO" at the bottom to show available.'
	            );
	        }
	    }]);

	    return ResultsPane;
	}(_react.Component);

	ResultsPane.propTypes = {
	    availableSets: _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.shape({
	        rowNum: _react.PropTypes.number.isRequired,
	        colNum: _react.PropTypes.number.isRequired
	    }))),
	    resultClickHandler: _react.PropTypes.func,
	    showError: _react.PropTypes.bool
	};
	exports.default = ResultsPane;

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);