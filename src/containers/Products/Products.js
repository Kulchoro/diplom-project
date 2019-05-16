import React, { Component } from "react";
import classes from "./Products.module.css";
import axios from "../../axios";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import ProductList from "../../components/ProductList/ProductList";
import ProductControl from "./ProductControl/ProductControl";
class Products extends Component {
  state = {
    products: [],
    cart: 0,
    itemsCart: []
  };

  componentDidMount() {
    axios.get("products.json").then(response => {
      this.setState({
        products: response.data
      });
    });
  }

  addScoreCart = (id, name, price) => {
    const item = [...this.props.itemsCart];
    item.push({
      name: name,
      price: price,
      id: item.length
    });

    this.setState({
      cart: this.state.cart + 1
    });
    this.props.onItemsCartChange(item);
  };

  render() {
    const addScoreCart = this.addScoreCart;
    let products = this.state.products;
    let result = Object.keys(products).map(function(key) {
      return [
        <ProductList key={[products[key]]}>
          <h3>{products[key].name}</h3>
          <p>
            {[
              products[key].description,
              <strong> Price: {products[key].price}</strong>
            ]}
          </p>
          <ProductControl
            addScoreCart={() =>
              addScoreCart(
                products[key].id,
                products[key].name,
                products[key].price
              )
            }
          />
        </ProductList>
      ];
    });
    console.log();
    return (
      <div className={classes.Products}>
        <div>
          <NavLink activeClassName={classes.active} to={"/cart/"}>
            Cart: {this.state.cart}
          </NavLink>
        </div>

        <div>{result}</div>
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
