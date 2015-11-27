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
    ).isRequired,
    errorMessage: React.PropTypes.string,
    children: React.PropTypes.any
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
