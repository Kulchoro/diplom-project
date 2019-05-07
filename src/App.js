import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import classes from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import Products from "./containers/Products";
import axios from "./axios";
class App extends Component {
  state = {
    information: []
  };

  componentDidMount() {
    axios.get("information.json").then(response => {
      console.log(response.data);
      this.setState({
        information: response.data
      });
    });
  }
  render() {
    
    return (
      <div className={classes.App}>
       
          <Navigation />
         
          {this.state.information}
        
      </div>
    );
  }
}

export default App;
