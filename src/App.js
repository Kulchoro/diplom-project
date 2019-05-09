import React, { Component } from "react";

import classes from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import Products from "./containers/Products/Products";

class App extends Component {
 
  render() {
  
    return (
      <div className={classes.App}>
        <Navigation />
        <Products />
      </div>
    );
  }
}

export default App;
