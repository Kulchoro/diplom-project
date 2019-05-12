import React, { Component } from "react";
import classes from "./Products.module.css";
import axios from "../../axios";
import { Route } from "react-router-dom";

import ProductList from "../../components/ProductList/ProductList";
class Products extends Component {
  state = {
    products: [],
    cart: 0,
    disabled: false
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
    let addScoreCart = this.addScoreCart;
    let products = this.state.products;
    let result = Object.keys(products).map(function(key) {
      return [
        <h3>{products[key].name}</h3>,
        <p>
          {[
            products[key].description,
            <strong> Price: {products[key].price}</strong>
          ]}
        </p>,
        <button>CheckOut</button>,
        <button onClick={addScoreCart}>Add cart</button>,
        <ProductList />
      ];
    });

    return (
      <div className={classes.Products}>
        <div>Cart: {this.state.cart}</div>

        <div>
          <ProductList products={result} addCart={this.addScoreCart} />
        </div>

        <Route path="/products" />
      </div>
    );
  }
}

export default Products;
