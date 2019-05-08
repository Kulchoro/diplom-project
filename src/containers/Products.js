import React from 'react';
import classes from './Products.module.css';

function Products(props) {
  return (
    <div className={classes.Products}>
      <p>{props.products}</p>
    </div>
  );
}

export default Products;