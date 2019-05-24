import React from "react";
import classes from "./ProductList.module.css";
import ProductControl from "../../containers/Products/ProductControl/ProductControl";
function ProductList(props) {
  return (
    <div className={classes.ProductList}>
      <h3>{props.name}</h3>
      <p>
        {props.description} <strong>Price: {props.price}</strong>
      </p>
      <ProductControl addScoreCart={props.addScoreCart} />
    </div>
  );
}

export default ProductList;
