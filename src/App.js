import React from 'react';
import './App.css';
import Header from './components/Header'
import Contestants from './components/Contestants'
import AllyForm from './components/AllyForm'
import AllyDisplay from './components/AllyDisplay'
function App() {
  return (
    <div className="App">
      <Header />
      <br/>
      <img className="iron-throne" src="https://vignette.wikia.nocookie.net/gameofthrones/images/c/c8/Iron_throne.jpg/revision/latest?cb=20131005175755" alt="iron throne"/>
      <AllyForm />
      <AllyDisplay />

    </div>
  );
}

export default App;
