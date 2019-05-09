import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import classes from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import Products from "./containers/Products/Products";
import About from "./components/About/About";
class App extends Component {
 
  render() {
  
    return (
      <BrowserRouter>
      <div className={classes.App}>
        <Navigation />
        <Route path="/" exact component={About} />
        <Route path="/products" component={Products}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
