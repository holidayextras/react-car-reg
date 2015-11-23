'use strict';

var jsdom = require('mocha-jsdom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var assert = require('assert');
var CarReg = require('../src/CarReg.jsx');

describe('Car Reg component', function() {

  jsdom();
  var props = null;

  beforeEach(function() {
    props = {
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
    TestUtils.renderIntoDocument(<CarReg {...props}/>
  );
});

it('is a valid React element', function() {
  assert.ok(TestUtils.isElement(<CarReg {...props} />));
});

describe('props', function() {
  var element = <CarReg {...props}/>;
  it('has default props', function () {
    assert.deepEqual(element.props, {
      "errorMessage": "This registration may be invalid",
      "label": "Country"
    });
  });

});
});
