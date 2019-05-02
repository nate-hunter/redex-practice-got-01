// Template for a React-Redux App:

// FILES:

// src/index.js:
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import reducer from './Redux/reducer';

import { Provider } from 'react-redux'; // Provider is a component of react-redux

const store = createStore(reducer) // store is an object

// console.log('index.js - store',store)
// debugger

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

//---------------------------------------------------

// src/Redux/reducer.js:
const initialState = {

}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer;
