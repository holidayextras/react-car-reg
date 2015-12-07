'use strict';

var React = require('react');
var UIToolkit = require('ui-toolkit');

var CarReg = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    options: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string,
        validation: React.PropTypes.instanceOf(RegExp)
      })
    ),
    errorMessage: React.PropTypes.string,
    children: React.PropTypes.any
  },

  getDefaultProps: function() {
    return {
      label: 'Choices:',
      errorMessage: 'An error has occured',
      options: [
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
      ]
    };
  },

  getInitialState: function() {
    return {
      placeholder:  this.props.options[0].placeholder || null,
      validation: this.props.options[0].validation || null
    }
  },

  optionChanged: function(e) {
    var selectedIndex = e.currentTarget.selectedIndex;
    this.setState({
      placeholder: this.props.options[selectedIndex].placeholder,
      validation: this.props.options[selectedIndex].validation,
    });
  },

  render: function() {
    return (
      <div className="carReg">
        <UIToolkit.Select label={this.props.label} handleChange={this.optionChanged}>
          {this.props.options.map(function(option, index){
            return <option key={index}>{option.text}</option>;
          })}
        </UIToolkit.Select>
        <UIToolkit.Input type='text' placeholder={this.state.placeholder} validator={this.state.validation} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = CarReg;
