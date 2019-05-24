import React from "react";
import classes from "./CartControl.module.css";

function CartControl(props) {
  return <div className={classes.CartControl}>{props.children}</div>;
}

export default CartControl;
