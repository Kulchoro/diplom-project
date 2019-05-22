import React from "react";
import classes from "./CartControl.module.css";

function CartControl(props) {
  return (
    <div className={classes.CartControl}>
      <button>+</button>
      <button>-</button>
      <button onClick={props.del}>X</button>
    </div>
  );
}

export default CartControl;
