import React from "react";
import classes from "./ProductControl.module.css";
import { NavLink } from "react-router-dom";
function ProductControl(props) {
  return (
    <div className={classes.ProductControl}>
      <NavLink to="/checkout">
        <button>Checkout</button>
      </NavLink>
      <button onClick={props.addScoreCart}>Add cart</button>
    </div>
  );
}

export default ProductControl;
