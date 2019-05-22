import React from "react";
import classes from "./Cart.module.css";

function Cart(props) {
  return (
    <div className={classes.Cart}>
      {props.cart}
      <p class>
        <strong>Total: {props.price}</strong>
      </p>
    </div>
  );
}

export default Cart;
