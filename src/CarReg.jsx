'use strict';

var React = require('react');
var UIToolkit = require('ui-toolkit');

var CarReg = React.createClass({
  propTypes: {
    countries: React.PropTypes.array.isRequired,
    errorMessage: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      errorMessage: 'This registration may be invalid'
    };
  },
  getInitialState: function() {
    var firstCountry = this.getCountry(0);
    return {
      placeholder: firstCountry.placeholder || '',
      validator: firstCountry.validation || ''
    };
  },
  getCountry: function(index) {
    if(!this.props.countries || !this.props.countries[index]) return {};
    return this.props.countries[index];
  },
  updateInputAttributes: function(select) {
    var selectedIndex = select.currentTarget.selectedIndex;
    var country = this.getCountry(selectedIndex);
    this.setState({
      placeholder: country.placeholder,
      validator: country.validation
    });
  },
  render: function() {
    return (
      <div className="carReg">
        <UIToolkit.Select label="Country:" handleChange={this.updateInputAttributes}>
          {this.props.countries.map(function(country, index){
            return <option key={index} name={index}>{country.name}</option>;
          })}
        </UIToolkit.Select>
        <UIToolkit.Input type='text' placeholder={this.state.placeholder} validator={this.state.validator} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = CarReg;
