import React from "react";
import classes from "./ProductList.module.css";
import ProductControl from "../../containers/Products/ProductControl/ProductControl"
function ProductList(props) {
  return (
    <div className={classes.ProductList}>
     <div>{props.products}</div> 
      <ProductControl addCart={props.addCart} />
    </div>
  );
}

export default ProductList;
