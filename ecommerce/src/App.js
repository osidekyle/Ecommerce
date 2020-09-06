import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Shop from "./Components/Shop"
import About from "./Components/About"
import Cart from "./Components/Cart"

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/products" component={Shop}/>
      <Route path="/cart"  component={Cart}/>
      <Route path="/about" component={About}/>
      {/*
      <Route path="/shop/:id"  component={ItemDetail}/>
      
      */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
