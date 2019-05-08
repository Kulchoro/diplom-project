import React, { Component } from "react";

import classes from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import Products from "./containers/Products";
import axios from "./axios";
class App extends Component {
  state = {
    information: [],
    id:[]
  };


  componentDidMount() {
    axios.get('information.json')
      .then(response => {
        this.setState({
          information: response.data
        });
      });
  }

  
  render() {
    const information = this.state.information;
    const hitozan = this.state.information;
    let res = Object.keys(this.state.information).map(function(key){
      return [+key, information[key], hitozan[key], information.content[key], information.price[key]];
        })
        console.log(res)
    return (
      <div className={classes.App}>
        <Navigation />
       
      
       </div>
    );
  }
}

export default App;
