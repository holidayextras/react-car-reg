var CarReg = require('../src/CarReg.jsx');
var React = require('react');
var ReactDOM = require('react-dom');

var renderCarReg = function(options, divID, label, errorMessage, callback) {
  ReactDOM.render(<CarReg options={options} label={label} errorMessage={errorMessage} inputEntered={callback}/>, document.getElementById(divID));
}
