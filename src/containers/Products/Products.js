import React, { Component } from "react";
import classes from "./Products.module.css";
import axios from "../../axios";
import { Route } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
class Products extends Component {
  state = {
    products: [],
    cart: []
  };

  componentDidMount() {
    axios.get("products.json").then(response => {
      this.setState({
        products: response.data
      });
    });
  }

  render() {
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
        <ProductList key={products.id} />
      ];
    });

    return (
      <div className={classes.Products}>
        <div>Cart: {this.state.cart}</div>

        <div>
          <ProductList products={result} />
        </div>

        <Route path="/products" />
      </div>
    );
  }
}

export default Products;
