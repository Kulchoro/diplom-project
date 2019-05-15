import React from "react";
import classes from "./CheckoutForm.module.css";

function CheckoutForm(props) {
  return (
    <div className={classes.CheckoutForm}>
      <h3>Checkout</h3>

      <label>
        Name:{" "}
        <input
          type="text"
          placeholder="e.g. Bakyt"
          onChange={event => props.changeHandler("name", event.target.value)}
        />
      </label>
      <label>
        Phone:{" "}
        <input
          type="text"
          placeholder="e.g. 0 555 123 456"
          onChange={event => props.changeHandler("phone", event.target.value)}
        />
      </label>
      <label>
        Address:{" "}
        <input
          type="text"
          placeholder="e.g. 150 Karasaeva str."
          onChange={event => props.changeHandler("address", event.target.value)}
        />
      </label>
    </div>
  );
}

export default CheckoutForm;
