import React from "react";
import classes from "./ProductList.module.css";
function ProductList(props) {
  return <div className={classes.ProductList}>{props.children}</div>;
}

export default ProductList;
