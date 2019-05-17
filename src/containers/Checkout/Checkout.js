import React, { Component } from "react";
import classes from "./Checkout.module.css";
import { connect } from "react-redux";
import CheckoutForm from "../../components/Checkout/CheckoutForm/CheckoutForm";

import axios from "../../axios";

class Checkout extends Component {
  state = {
    products: [],
    price: 0,
    customer: {
      name: "",
      phone: "",
      address: ""
    }
  };

  submitHandler = () => {
    const order = {
      price: this.state.price,
      customer: this.state.customer
    };

    if (
      order.customer.name.length > 5 &&
      order.customer.phone.length > 5 &&
      order.customer.address.length > 5
    ) {
      axios.post("orders.json", order).then(response => {
        if (response.status === 0) {
          this.props.history.replace("/orders");
        }
      });
    } else {
      alert("Fill all the data!");
    }
  };

  cancelHandler = () => {
    this.props.history.goBack();
  };

  changeHandler = (field, value) => {
    const customer = this.state.customer;

    customer[field] = value;

    this.setState({ customer });
  };

  render() {
    return (
      <div className={classes.Checkout}>
        <CheckoutForm
          submitHandler={this.submitHandler}
          cancelHandler={this.cancelHandler}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsCart: state.itemsCart,
    price: state.price
  };
};

export default connect(
  null,
  mapStateToProps
)(Checkout);
