'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _combineReducers = require('./lib/combineReducers');

Object.defineProperty(exports, 'combineReducers', {
	enumerable: true,
	get: function get() {
		return _combineReducers.combineReducers;
	}
});

var _createStore = require('./lib/createStore');

Object.defineProperty(exports, 'createStore', {
	enumerable: true,
	get: function get() {
		return _createStore.createStore;
	}
});