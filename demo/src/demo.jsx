var CarReg = require('../../lib/CarReg.js');
var React = require('react');
var ReactDOM = require('react-dom');

var props = {
  countries: [
    { name: 'Deutschland', placeholder: 'XXX-AA 9999', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { name: 'Anderes Land', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Belgien', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Danemark', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Frankreich', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Italien', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Luxemburg', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Niederlande', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Osterreich', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Polen', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Schweiz', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Slowenien', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Spanien', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { name: 'Tschechien', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i }
  ]
};

ReactDOM.render(<CarReg {...props} />, document.getElementById('example'));
