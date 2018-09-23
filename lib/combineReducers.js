"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.combineReducers = combineReducers;

/**
 * Combine All Given Reducers
 * @param {object} reducers - reducer {name: function(state, action)}
 */

function combineReducers(reducers) {

	// First get an array with all the keys of the reducers (the reducer names)
	var reducerKeys = Object.keys(reducers);

	return function combination() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var action = arguments[1];

		// This is the object we are going to return.
		var nextState = {};

		// Loop through all the reducer keys
		for (var i = 0; i < reducerKeys.length; i++) {
			// Get the current key name 
			var key = reducerKeys[i];
			// Get the current reducer
			var reducer = reducers[key];
			// Get the the previous state
			var previousStateForKey = state[key];
			// Get the next state by running the reducer
			var nextStateForKey = reducer(previousStateForKey, action);
			// Update the new state for the current reducer
			nextState[key] = nextStateForKey;
		}
		return nextState;
	};
}