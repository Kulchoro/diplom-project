import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Cart.module.css";
import Cart from "../../components/Cart/Cart";
import CartControl from "../../components/Cart/CartControl/CartControl";
class Carts extends Component {
  cancelHandler = () => {
    this.props.history.goBack();
  };

  del = product => {
    let array = [...this.props.itemsCart];
    array.splice(product, 1);
    this.props.onItemsCartChange(array);
  };

  render() {
    let price = 0;

    let item = this.props.itemsCart.map(item => {
      price += item.price;

      return (
        <div>
          <h3>{item.name}</h3>
          <p>
            <strong> Price: {item.price}</strong>
          </p>
          <button>+</button>
          <button>-</button>
          <button value={item.id} onClick={this.del}>
            X
          </button>
        </div>
      );
    });
    return (
      <div className={classes.Cart}>
        <Cart price={price} cart={item} />
        <CartControl del={this.del} />
        <NavLink to="/checkout">
          <button>Checkout</button>
        </NavLink>
        <button onClick={this.cancelHandler}>Back</button>
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
)(Carts);
