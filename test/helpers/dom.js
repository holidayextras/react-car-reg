'use strict';

var jsdom = require('jsdom').jsdom;
var fakeDOM = jsdom('<!doctype html><html><body></body></html>');

global.document = fakeDOM;
global.window = document.parentWindow;
global.navigator = window.navigator;

module.exports = fakeDOM;
