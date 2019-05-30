import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Cart.module.css";
import CartControl from "../../components/Cart/CartControl/CartControl";
class Cart extends Component {
  cancelHandler = () => {
    this.props.history.goBack();
  };

  addProducts = event => {
    let array = [...this.props.itemsCart];

    array.map(product => {
      if (product.id === event.target.value) {
        product.unique = product.unique + 1;
        if (product.unique === 10) {
          event.target.disabled = true;
        } else {
          event.target.disabled = false;
        }
      }
    });

    this.props.onItemsCartChange(array);
  };
  lessProduct = event => {
    let array = [...this.props.itemsCart];

    array.map(product => {
      if (product.id === event.target.value) {
        product.unique = product.unique - 1;
        if (product.unique === 0) {
          array.splice(product, 1);
        }
      }
    });

    this.props.onItemsCartChange(array);
  };

  render() {
    let item = this.props.itemsCart.map(item => {
      return [
        <div>
          <h3>
            {item.name} <small>(Score: {item.unique})</small>
          </h3>
          <p>
            {item.description}
            <strong> Price: {item.price}</strong>
          </p>
          <button onClick={this.addProducts} value={item.id}>
            +
          </button>
          <button onClick={this.lessProduct} value={item.id}>
            -
          </button>
          <p>
            <strong>Total: {item.price}</strong>
          </p>
        </div>
      ];
    });
    return (
      <div className={classes.Cart}>
        {item}

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
    products: state.products,
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
)(Cart);
