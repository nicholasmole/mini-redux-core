"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * createStore - Returns the store of the application
 * @param {object} reducer - Pass in reducer function that is updated 
 *                           via the dispatch function.
 * @param {object} initialState - (optional) Starting state of application
 */

var createStore = exports.createStore = function createStore(reducer, initialState) {
  var store = {};
  store.state = initialState;
  store.listeners = [];

  store.getState = function () {
    return store.state;
  };

  store.subscribe = function (listener) {
    store.listeners.push(listener);
  };

  /**
   * createStore.dispatch - Returns changed state - altered by the passed reducer function
   * @param {object} action - Name, and Payload params for reducer function
   */

  store.dispatch = function (action) {
    store.state = reducer(store.state, action);
    store.listeners.forEach(function (listener) {
      return listener();
    });
  };

  return store;
};