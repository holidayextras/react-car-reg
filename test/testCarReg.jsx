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
  var stub;

  beforeEach(function() {
    stub = sinon.stub();
    options = [
      { text: 'Test1', placeholder: 'XXXX', validation: /^[A-Z]{3}/i },
      { text: 'Test2', placeholder: '1234', validation: /^[0-9]{4}/i }
    ];
    element = TestUtils.renderIntoDocument(<CarReg options={options} inputEntered={stub}/>);
    input = TestUtils.findRenderedComponentWithType(element, UIToolkit.Input);
    select = TestUtils.findRenderedComponentWithType(element, UIToolkit.Select);
  });

  afterEach(function(done) {
    ReactDOM.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';
    setTimeout(done);
  });


  it('is a valid React element', function() {
    expect(TestUtils.isElement(<CarReg options={options} />)).to.equal(true);
  });

  describe('when placeholderInMessage is true', function() {
    it('renders with different errorMessage', function() {
      element = TestUtils.renderIntoDocument(<CarReg options={options} placeholderInMessage={true}/>);
      input = TestUtils.findRenderedComponentWithType(element, UIToolkit.Input);
      expect(input.props.errorMessage).to.equal('An error has occured XXXX');
    });
  });

  it('renders with default props', function() {
    options = [];
    element = <CarReg options={options}/>;
    expect(element.props.label).to.eql('Choices:');
    expect(element.props.errorMessage).to.eql('An error has occured');
  });

  it('is rendered with given values', function() {
    var option = TestUtils.findRenderedComponentWithType(element, UIToolkit.Select).props;
    expect(option.children.length).to.equal(2);
  });

  describe('props', function() {
    it('is rendered with placeholder', function() {
      var placeholderValue = input.props.placeholder;
      expect(placeholderValue).to.equal('XXXX');
    });

    describe('input entered', function() {
      describe('when input is entered', function() {
        it('fires callback', function() {
          var node = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
          TestUtils.Simulate.change(node, {
            target: {
              value: '1234'
            }
          });
          expect(stub).to.have.been.called();
        });
      });
    });

    describe('when select is changed', function() {
      it('should change the placeholder', function() {
        select.handleChange({ currentTarget: { selectedIndex: 1 } });
        expect(input.props.placeholder).to.equal('1234');
      });

      describe('if placeholderInMessage is true', function() {
        it('renders with different errorMessage', function() {
          element = TestUtils.renderIntoDocument(<CarReg options={options} placeholderInMessage={true}/>);
          element.optionChanged({ currentTarget: { selectedIndex: 1 } });
          input = TestUtils.findRenderedComponentWithType(element, UIToolkit.Input);
          expect(input.props.errorMessage).to.equal('An error has occured 1234');
        });
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
        var placeholderValue = input.props.placeholder;
        expect(placeholderValue).to.equal(null);
      });

      it('validation should be null', function() {
        var validatorValue = input.props.validator;
        expect(validatorValue).to.equal(null);
      });

      it('errorMessage should be default', function() {
        var messageValue = input.props.errorMessage;
        expect(messageValue).to.equal('An error has occured');
      });

    });

  });

});
