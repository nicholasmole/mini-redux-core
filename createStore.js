/**
 * createStore - Returns the store of the application
 * @param {object} reducer - Pass in reducer function that is updated 
 *                           via the dispatch function.
 * @param {object} initialState - (optional) Starting state of application
 */

export const createStore = (reducer, initialState) => {
  const store = {};
  store.state = initialState;
  store.listeners = [];
  
  store.getState = () => store.state;
  
  store.subscribe = (listener) => {
    store.listeners.push(listener);
  };
  
  /**
   * createStore.dispatch - Returns changed state - altered by the passed reducer function
   * @param {object} action - Name, and Payload params for reducer function
   */

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    store.listeners.forEach(listener => listener());
  };
  
  return store;
};