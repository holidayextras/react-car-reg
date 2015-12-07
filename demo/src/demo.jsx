var CarReg = require('../../lib/CarReg.js');
var React = require('react');
var ReactDOM = require('react-dom');

var label = 'Country';
var errorMessage = 'This registration may be invalid';

ReactDOM.render(<CarReg label={label} errorMessage={errorMessage} />, document.getElementById('example'));
