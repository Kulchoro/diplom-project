import React from "react";
import classes from "./ProductList.module.css";

function ProductList(props) {
  return (
    <div className={classes.ProductList}>
      <p>{props.products}</p>
      <button>CheckOut</button>
      <button>Add cart</button>
    </div>
  );
}

export default ProductList;
