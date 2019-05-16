import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Cart.module.css";

class Cart extends Component {
  state = {
    products: [],
    price: 0
  };

  checkoutHandler = () => {
    const query = [];

    for (let product in this.state.products) {
      if (this.props.products[product] > 0) {
        const name = encodeURIComponent(product);
        const value = encodeURIComponent(this.props.products[product]);

        query.push(`${name}=${value}`);
      }
    }
    query.push(`price=${encodeURIComponent(this.state.price)}`);

    this.props.history.push({
      pathname: "/checkout",
      search: `?${query.join("&")}`
    });
  };

  del = index => {
    let array = [...this.props.itemsCart];
    array.splice(index, 1);
    this.props.onItemsCartChange(array);
  };
  render() {
    let item = this.props.itemsCart.map(item => {
      return (
        <div>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <button value={item.id} onClick={this.del}>
            X
          </button>
        </div>
      );
    });
    return (
      <div className={classes.Cart}>
        {item}
        <NavLink to="/checkout">
          <button onClick={this.checkoutHandler}>Checkout</button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsCart: state.itemsCart
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
)(Cart);
