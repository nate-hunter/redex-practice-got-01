import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'; // Provider is a component of react-redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './Redux/reducer'; // From React Redux Lecture
import allyReducer from './Redux/allyReducer'; // From Forms Lecture

// const store = createStore(allyReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // store is an object
const store = createStore(allyReducer, applyMiddleware(thunk)) // this says if a dispatch is called with a function, it will be called with dispatch


console.log('index.js - store',store.getState())



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
