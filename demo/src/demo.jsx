var CarReg = require('../../lib/CarReg.js');
var React = require('react');
var ReactDOM = require('react-dom');

var props = {
  countries: [
    { name: 'Anderes Land' },
    { name: 'Belgien' },
    { name: 'Danemark' },
    { name: 'Deutschland', placeholder: 'XXX-AA 9999', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Frankreich' },
    { name: 'Italien' },
    { name: 'Luxemburg' },
    { name: 'Niederlande' },
    { name: 'Osterreich' },
    { name: 'Polen' },
    { name: 'Schweiz' },
    { name: 'Slowenien' },
    { name: 'Spanien' },
    { name: 'Tschechien' }
  ]
};

ReactDOM.render(<CarReg {...props} />, document.getElementById('example'));
