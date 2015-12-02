var CarReg = require('../../lib/CarReg.js');
var React = require('react');
var ReactDOM = require('react-dom');

var renderCarReg = function(options, divID, label, errorMessage) {
  ReactDOM.render(<CarReg options={options} label={label} errorMessage={errorMessage} />, document.getElementById(divID));
}
