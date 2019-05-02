import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// "store" is created in this file

import { createStore } from 'redux';
import reducer from './Redux/reducer';

// How does this app know about the Redux store? import Provider. Need to wrap <App/> below in Provider tags.
import { Provider } from 'react-redux';

const store = createStore(reducer)

// the object in dispatch is the "action"
// store.dispatch({
//   type: "ADD_TITLE", // tells our if statement what we want to do
//   title: "Iron Throne" // payload
// })

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));
