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

    array.map(obj => {
      if (obj.id === event.target.value) {
        obj.unique = obj.unique + 1;
        console.log(obj.unique, array);
      }
    });

    this.props.onItemsCartChange(array);
  };
  lessProduct = event => {
    let array = [...this.props.itemsCart];

    array.map(obj => {
      if (obj.id === event.target.value) {
        obj.unique = obj.unique - 1;
        console.log(obj.unique, array);
        if (obj.unique === 0) {
          array.splice(obj, 1);
        }
      }
    });

    this.props.onItemsCartChange(array);
  };

  render() {
    let price = 0;
    let item = this.props.itemsCart.map(item => {
      price += item.price;
      return [
        <div>
          <h3>
            {item.name} <small>({item.unique})</small>
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
        </div>
      ];
    });
    return (
      <div className={classes.Cart}>
        {item}
        <p>
          <strong>Total: {price}</strong>
        </p>
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
