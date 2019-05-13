import React from "react";
import { connect } from "react-redux";

import classes from "./Cart.module.css";

function Cart(props) {
  let item = props.itemsCart.map(item => {
    return (
      <div>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <button
          value={item.id}
          onClick={event =>
            event.target.parentElement.parentElement.children.map(i => {
              if (i === event.target.parentElement) {
                console.log(true);
              } else {
                console.log(false);
              }
            })
          }
        >
          Del
        </button>
      </div>
    );
  });
  return <div className={classes.Cart}>{item}</div>;
}

const mapStateToProps = state => {
  return {
    itemsCart: state.itemsCart
  };
};

export default connect(
  mapStateToProps,
  null
)(Cart);
