import React, { Component } from "react";

import classes from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import Products from "./containers/Products";
import axios from "./axios";
class App extends Component {
  state = {
    information: null
  };


 componentDidMount() {
    axios.get("information.json").then(response => {
      const information = [];
    for (const id in response.data) {
      information.push({
        id,
        ...response.data.information.content[id]
      });
    }
    this.setState({
     information
   })
   }); 
   }

  renderObject() {Object.keys(this.state.information.content,this.state.information.price).map(function(key) {
    return <div>Key: {key}, Value: {this.state.content[key]}</div>;
})}
  

  render() {
  
    
    return (
      <div className={classes.App}>
        <Navigation />
        {this.state.information.content}
      </div>
    );
  }
}

export default App;
