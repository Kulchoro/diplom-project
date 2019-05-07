import React, { Component } from 'react';
import classes from './Products.module.css';
import axios from "../axios"
class Products extends Component {
  state = {
    information: []
  };
  componentDidMount() {
    axios.get("information.json").then(response => {
      console.log(response.data)
      this.setState({
        information: response.data
      });
      
    });
  }
  render() {
    return (
      <div className={classes.Products}>
        <p>{this.state.information}</p>
      </div>
    );
  }
}

export default Products;