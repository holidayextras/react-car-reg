'use strict';

require('./helpers/');

var React = require('react');
var ReactDOM = require('react-dom');
var UIToolkit = require('ui-toolkit');
var TestUtils = require('react-addons-test-utils');
var sinon = require('sinon');
var CarReg = require('../src/CarReg.jsx');


describe('Car Reg component', function() {

  var options;
  var element;

  beforeEach(function() {
  options = [
        { name: 'Test1', placeholder: 'XXXX', validation: /^[A-Z]{3}/i },
        { name: 'Test2', placeholder: '1234', validation: /^[0-9]{4}/i }
      ];
    element = TestUtils.renderIntoDocument(<CarReg options={options} />);
  });

  it('is a valid React element', function() {
    expect(TestUtils.isElement(<CarReg options={options} />)).to.equal(true);
  });

  it('renders with default props', function () {
    element = <CarReg />;
    expect(element.props).to.eql({
      label: 'Choices:',
      errorMessage: 'An error has occured'
    });
  });

  it('is rendered with values', function() {
    var options = TestUtils.findRenderedComponentWithType(element, UIToolkit.Select).props;
    expect(options.children.length).to.equal(2);
  });

  describe('placeholder', function() {
    var placeholderValue;
    var input;
    var select;

    beforeEach(function(){
      input = TestUtils.findRenderedComponentWithType(element, UIToolkit.Input);
      select = TestUtils.findRenderedComponentWithType(element, UIToolkit.Select);
      placeholderValue = input.props.placeholder;
    });

    it('is rendered with placeholder', function() {
      expect(placeholderValue).to.equal('XXXX');
    });

    describe('when select is changed', function() {
      it('should change the placeholder', function() {
        var options = TestUtils.scryRenderedDOMComponentsWithTag(select, 'option');
        select.handleChange({currentTarget: {selectedIndex: 1}})
        expect(input.props.placeholder).to.equal('1234');

      });

    });

  });

});
