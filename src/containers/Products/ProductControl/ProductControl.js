import React from "react";
import classes from "./ProductControl.module.css";

function ProductControl(props) {
  return (
    <div className={classes.ProductControl}>
      <button onClick={props.addScoreCart}>Add cart</button>
    </div>
  );
}

export default ProductControl;
