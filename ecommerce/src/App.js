import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from "./Components/Nav"


function App() {
  return (
    <div className="App">
      <Nav/>
    </div>
  );
}

export default App;
