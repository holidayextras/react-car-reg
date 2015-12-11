var CarReg = require('../../lib/CarReg.js');
var React = require('react');
var ReactDOM = require('react-dom');

var label = 'Country';
var errorMessage = 'This registration may be invalid';
var callback = function(e) { e.currentTarget.value };

ReactDOM.render(<CarReg label={label} errorMessage={errorMessage} inputEntered={callback} placeholderInMessage={true} />, document.getElementById('example'));
