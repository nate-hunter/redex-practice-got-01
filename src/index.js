import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import reducer from './Redux/reducer'; // From React Redux Lecture
import allyReducer from './Redux/allyReducer'; // From Forms Lecture

import { Provider } from 'react-redux'; // Provider is a component of react-redux

const store = createStore(allyReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // store is an object
// const store = createStore(reducer)


console.log('index.js - store',store.getState())
// debugger


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));



// the object in dispatch is the "action"
// store.dispatch({
  //   type: "ADD_TITLE", // tells our if statement what we want to do
  //   title: "Iron Throne" // payload
  // })
