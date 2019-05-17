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
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const products = {};
    let price = 0;

    // [['product', 'count'], ['price', '0']]
    for (let parameter of query.entries()) {
      if (parameter[0] === "price") {
        price = +parameter[1];
      } else {
        products[parameter[0]] = +parameter[1];
      }
    }

    this.setState({ products, price });
  }
  submitHandler = () => {
    const order = {
      products: this.state.products,
      price: this.state.price,
      customer: this.state.customer
    };

    if (
      order.customer.name.length > 5 &&
      order.customer.phone.length > 5 &&
      order.customer.address.length > 5
    ) {
      axios.post("orders.json", order).then(response => {
        if (response.status === 200) {
          alert("Your order is accepted");
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
