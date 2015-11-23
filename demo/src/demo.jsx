var CarReg = require('../../lib/CarReg.js');
var React = require('react');
var ReactDOM = require('react-dom');

var props = {
  countries: [
    { name: 'Deutschland', placeholder: 'XXX-AA 9999', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Anderes Land', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Belgien', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Danemark', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Frankreich', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Italien', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Luxemburg', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Niederlande', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Osterreich', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Polen', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Schweiz', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Slowenien', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Spanien', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Tschechien', placeholder: 'XXX-XXX-XXX', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i }
  ]
};

ReactDOM.render(<CarReg {...props} />, document.getElementById('example'));
