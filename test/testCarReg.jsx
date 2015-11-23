'use strict';

var jsdom = require('mocha-jsdom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var assert = require('assert');
var CarReg = require('../');

describe('Loading component', function() {

  jsdom();
  var props = null;

  beforeEach(function() {
    props = {};
    TestUtils.renderIntoDocument(<CarReg {...props} />);
  });

  it('is a valid React element', function() {
    assert.ok(TestUtils.isElement(<CarReg {...props} />));
  });
});
