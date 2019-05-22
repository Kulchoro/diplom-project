import React, { Component } from "react";
import classes from "./Products.module.css";
import axios from "../../axios";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import ProductList from "../../components/ProductList/ProductList";

class Products extends Component {
  state = {
    products: [],
    itemsCart: this.props.itemsCart.length
  };

  componentDidMount() {
    axios.get("products.json").then(response => {
      const products = response.data;
      this.setState({
        products: products
      });
    });
  }

  addScoreCart = () => {
    const item = [...this.props.itemsCart];
    item.push({
      item
    });

    this.setState({
      itemsCart: item.length
    });
    this.props.onItemsCartChange(item);
  };

  render() {
    return (
      <div className={classes.Products}>
        <div className={classes.cart}>
          <NavLink className={classes.active} to={"/cart/"}>
            Cart: {this.state.itemsCart}
          </NavLink>
        </div>
        {Object.keys(this.state.products).map(key => (
          <div>
            <ProductList
              addScoreCart={this.addScoreCart}
              name={this.state.products[key].name}
              description={this.state.products[key].description}
              price={this.state.products[key].price}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsCart: state.itemsCart,
    price: state.price
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemsCartChange: value => dispatch({ type: "CHANGE", value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
