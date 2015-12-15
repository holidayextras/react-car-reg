'use strict';

var React = require('react');
var UIToolkit = require('ui-toolkit');

var CarReg = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    labelContainerClass: React.PropTypes.string,
    inputContainerClass: React.PropTypes.string,
    options: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string,
        validation: React.PropTypes.instanceOf(RegExp)
      })
    ),
    errorMessage: React.PropTypes.string,
    children: React.PropTypes.any,
    inputEntered: React.PropTypes.func,
    inputName: React.PropTypes.string,
    placeholderInMessage: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      label: 'Choices:',
      errorMessage: 'An error has occured',
      labelContainerClass: 'labelContainer',
      inputContainerClass: 'inputContainer',
      placeholderInMessage: false,
      inputName: "Registration",
      options: [
        { text: 'Deutschland', placeholder: 'XXX-AA 9999', validation: /^[A-ZÄÖÜ]{1,3}\-[A-ZÄÖÜ]{1,2}\s{1}[0-9]{1,4}/i },
        { text: 'Anderes Land', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Belgien', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Danemark', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Frankreich', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Italien', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Luxemburg', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Niederlande', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Osterreich', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Polen', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Schweiz', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Slowenien', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Spanien', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i },
        { text: 'Tschechien', placeholder: 'XXX-XXX-XXX', validation: /^[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}\-[A-Z0-9]{1,3}/i }
      ]
    };
  },

  getInitialState: function() {
    var eMessage = this.props.errorMessage + ' ' + this.props.options[0].placeholder;
    return {
      placeholder: this.props.options[0].placeholder || null,
      validation: this.props.options[0].validation || null,
      errorMessage: this.props.placeholderInMessage ? eMessage : this.props.errorMessage
    };
  },

  optionChanged: function(e) {
    var selectedIndex = e.currentTarget.selectedIndex;
    var eMessage = this.props.errorMessage;

    if (this.props.placeholderInMessage) {
      eMessage = eMessage + this.props.options[selectedIndex].placeholder;
    }


    this.setState({
      placeholder: this.props.options[selectedIndex].placeholder,
      validation: this.props.options[selectedIndex].validation,
      errorMessage: eMessage
    });
  },

  render: function() {
    return (
      <div className="carReg">
        <div className={this.props.labelContainerClass}>
          <label>{this.props.label}</label>
        </div>
        <div className={this.props.inputContainerClass}>
          <UIToolkit.Select handleChange={this.optionChanged}>
            {this.props.options.map(function(option, index) {
              return <option key={index}>{option.text}</option>;
            })}
          </UIToolkit.Select>
          <UIToolkit.Input name={this.props.inputName} type="text" placeholder={this.state.placeholder} validator={this.state.validation} errorMessage={this.state.errorMessage} handleChange={this.props.inputEntered}/>
        </div>
      </div>
    );
  }
});

module.exports = CarReg;
