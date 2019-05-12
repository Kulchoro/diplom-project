import React from 'react';
import classes from './ProductConrtol.module.css';

function ProductConrtol(props) {
  return (
    <div className={classes.ProductConrtol}>
      <button>CheckOut</button>
      <button>Add cart</button>
    </div>
  );
}

export default ProductConrtol;