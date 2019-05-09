import React, { Component } from "react";
import classes from "./Products.module.css";
import axios from "../../axios";
import { Route } from "react-router-dom";
class Products extends Component {
  state = {
    price: 0,
    cart: []
  };
  componentDidMount() {
    axios.get("information.json").then(response => {
      this.setState({
        price: response.data
      });
    });
  }
  render() {
    const price = this.state.price;
    let res = Object.keys(this.state.price).map(function(key) {
      return [price[key]];
    });

    return (
      <div className={classes.Products}>
        <div>Cart:{this.state.cart}</div>
        <div>
          <h5>Product #1</h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          animi ipsum facilis recusandae esse ab sunt consequatur incidunt,
          voluptate velit praesentium quod repudiandae minima modi vel nemo
          corrupti hic aspernatur. Price: {res}
          <button>Checkout</button>
          <button>Add cart</button>
        </div>
        <div>
          <h5>Product #2</h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          animi ipsum facilis recusandae esse ab sunt consequatur incidunt,
          voluptate velit praesentium quod repudiandae minima modi vel nemo
          corrupti hic aspernatur. Price: {res}
          <button>Checkout</button>
          <button>Add cart</button>
        </div>
        <div>
          <h5>Product #3</h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          animi ipsum facilis recusandae esse ab sunt consequatur incidunt,
          voluptate velit praesentium quod repudiandae minima modi vel nemo
          corrupti hic aspernatur. Price: {res}
          <button>Checkout</button>
          <button>Add cart</button>
        </div>
        <div>
          <h5>Product #4</h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          animi ipsum facilis recusandae esse ab sunt consequatur incidunt,
          voluptate velit praesentium quod repudiandae minima modi vel nemo
          corrupti hic aspernatur. Price: {res}
          <button>Checkout</button>
          <button>Add cart</button>
        </div>
        <div>
          <h5>Product #5</h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          animi ipsum facilis recusandae esse ab sunt consequatur incidunt,
          voluptate velit praesentium quod repudiandae minima modi vel nemo
          corrupti hic aspernatur. Price: {res}
          <button>Checkout</button>
          <button>Add cart</button>
        </div>
        <div>
          <h5>Product #6</h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          animi ipsum facilis recusandae esse ab sunt consequatur incidunt,
          voluptate velit praesentium quod repudiandae minima modi vel nemo
          corrupti hic aspernatur. Price: {res}
          <button>Checkout</button>
          <button>Add cart</button>
        </div>
        <Route path="/products" render={() => <strong>Hello!</strong>} />
      </div>
    );
  }
}

export default Products;
