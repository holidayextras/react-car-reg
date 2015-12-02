var CarReg = require('../../lib/CarReg.js');
var React = require('react');
var ReactDOM = require('react-dom');

var label = 'Country';
var errorMessage = 'This registration may be invalid';
var options = [
    { text: 'Deutschland', placeholder: 'XXX-AA 9999', validation: /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}\s?[0-9]{1,4}[H]{0,1}/i },
    { text: 'Anderes Land', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Belgien', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Danemark', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Frankreich', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Italien', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Luxemburg', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Niederlande', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Osterreich', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Polen', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Schweiz', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Slowenien', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Spanien', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
    { text: 'Tschechien', placeholder: 'XXX-XX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i }
  ];
  var callback = function(e) {e.currentTarget.value};


ReactDOM.render(<CarReg options={options} label={label} errorMessage={errorMessage} inputEntered={callback} />, document.getElementById('example'));
