import React from "react";
import classes from "./ProductList.module.css";
import ProductControl from "../ProductControl/ProductControl"
function ProductList(props) {
  return (
    <div className={classes.ProductList}>
     <div>{props.products}</div> 
      <ProductControl />
    </div>
  );
}

export default ProductList;
