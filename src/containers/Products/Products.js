import React, { Component } from "react";
import classes from "./Products.module.css";
import axios from "../../axios";
import { Route } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
class Products extends Component {
  state = {
    products: [],
    cart: 0
  };

  componentDidMount() {
    axios.get("products.json").then(response => {
      this.setState({
        products: response.data
      });
    });
  }

  render() {
    const products = this.state.products;
    let result = Object.keys(products).map(function(key) {
      return products[key]
    });
    return (
      <div className={classes.Products}>
        <div>Cart:{this.state.cart}</div>
        <ProductList product={this.state.products} />
        <Route path="/products" />
      </div>
    );
  }
}

export default Products;
