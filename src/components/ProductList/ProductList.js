import React from "react";
import classes from "./ProductList.module.css";
import ProductControl from "../../containers/Products/ProductControl/ProductControl";
function ProductList(props) {

  return (
    <div className={classes.ProductList}>
      {props.children}
      <ProductControl addScoreCart={props.addScoreCart} />
    </div>
  );
}

export default ProductList;
