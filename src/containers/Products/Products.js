import React, { Component } from "react";
import classes from "./Products.module.css";
import axios from "../../axios";
import { Route } from "react-router-dom";

import ProductList from "../../components/ProductList/ProductList";
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
  addScoreCart = () => {
    this.setState({
      cart: this.state.cart + 1
    });
  };
  render() {
    const addScoreCart = this.addScoreCart;
    let products = this.state.products;
    let result = Object.keys(products).map(function(key) {
      return [
        <ProductList addScoreCart={addScoreCart}>
          <h3>{products[key].name}</h3>
          <p>
            {[
              products[key].description,
              <strong> Price: {products[key].price}</strong>
            ]}
          </p>
        </ProductList>
      ];
    });

    return (
      <div className={classes.Products}>
        <div>Cart: {this.state.cart}</div>

        <div>{result}</div>

        <Route path="/products" />
      </div>
    );
  }
}

export default Products;
