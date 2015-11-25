'use strict';

var React = require('react');
var UIToolkit = require('ui-toolkit');

var CarReg = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    options: React.PropTypes.array.isRequired,
    errorMessage: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      label: 'Choices:',
      errorMessage: 'An error has occured'
    };
  },

  getInitialState: function() {
    return {
      placeholder:  this.props.options[0].placeholder || null,
      validator: this.props.options[0].validator || null
    }
  },

  optionChanged: function(e) {
    var selectedIndex = e.currentTarget.selectedIndex;
    this.setState({
      placeholder: this.props.options[selectedIndex].placeholder,
      validator: this.props.options[selectedIndex].validator,
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
        <UIToolkit.Input type='text' placeholder={this.state.placeholder} validator={this.state.validator} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = CarReg;
