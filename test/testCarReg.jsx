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
  var input;
  var select;

  beforeEach(function() {
  options = [
        { text: 'Test1', placeholder: 'XXXX', validation: /^[A-Z]{3}/i },
        { text: 'Test2', placeholder: '1234', validation: /^[0-9]{4}/i }
      ];
    element = TestUtils.renderIntoDocument(<CarReg options={options} />);
    input = TestUtils.findRenderedComponentWithType(element, UIToolkit.Input);
    select = TestUtils.findRenderedComponentWithType(element, UIToolkit.Select);
  });

  it('is a valid React element', function() {
    expect(TestUtils.isElement(<CarReg options={options} />)).to.equal(true);
  });

  it('renders with default props', function () {
    options = [];
    element = <CarReg options={options}/>;
    expect(element.props.label).to.eql('Choices:');
    expect(element.props.errorMessage).to.eql('An error has occured');
  });

  it('is rendered with given values', function() {
    var options = TestUtils.findRenderedComponentWithType(element, UIToolkit.Select).props;
    expect(options.children.length).to.equal(2);
  });

  describe('props', function() {
    var placeholderValue;
    var validatorValue;

    beforeEach(function(){
      placeholderValue = input.props.placeholder;
      validatorValue = input.props.validator;
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

    describe('if only name is set', function() {

      beforeEach(function() {
      options = [
            { text: 'Test1' },
            { text: 'Test2' }
          ];
        element = TestUtils.renderIntoDocument(<CarReg options={options} />);
        input = TestUtils.findRenderedComponentWithType(element, UIToolkit.Input);
      });

      it('placeholder should be null', function() {
        placeholderValue = input.props.placeholder;
        expect(placeholderValue).to.equal(null);
      });

      it('validation should be null', function() {
        validatorValue = input.props.validator;
        expect(validatorValue).to.equal(null);
      });
    });

  });

});
