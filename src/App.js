import React, { Component } from "react";

import classes from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import Products from "./containers/Products";
import axios from "./axios";
class App extends Component {
  state = {
    information: [],
    
  };


 componentDidMount() {
    axios.get("information.json").then(response => {
      const information = [];
    for (const id in response.data) {
      information.push({
        id,
        ...response.data.information[id]
      });
    }
    this.setState({
     information
   })
   }); 
   }

  //***renderObject() {Object.keys(this.state.information.content).map(function(key) {
    ///return <div>Key: {key}, Value: {this.state.content[key]}</div>;
//})}///***
  

  render() {
  
    
    return (
      <div className={classes.App}>
        <Navigation />
       <p>{this.state.information}</p>    
       </div>
    );
  }
}

export default App;
