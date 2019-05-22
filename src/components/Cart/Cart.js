import React from "react";
import classes from "./Cart.module.css";

function Cart(props) {
  return <div className={classes.Cart}>
  {props.cart}
  </div>;
}

export default Cart;
