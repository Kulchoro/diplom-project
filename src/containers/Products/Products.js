import React, { Component } from "react";
import classes from "./Products.module.css";
import axios from "../../axios";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ProductControl from "../../containers/Products/ProductControl/ProductControl";
import ProductList from "../../components/ProductList/ProductList";

class Products extends Component {
  state = {
    products: [],
    itemsCart: this.props.itemsCart.length
  };

  componentDidMount() {
    axios.get("products.json").then(response => {
      const products = response.data;
      this.setState({
        products: products
      });
    });
  }

  addScoreCart = (name, price, id) => {
    const item = [...this.props.itemsCart];
    item.push({
      name: name,
      price: price,
      id: item.length
    });
    this.setState({
      itemsCart: item.length
    });
    this.props.onItemsCartChange(item);
  };

  render() {
    const addScoreCart = this.addScoreCart;
    let products = this.state.products;
    let result = Object.keys(products).map(product => {
      return [
        <ProductList key={[products[product]]}>
          <h3>{products[product].name}</h3>
          <p>
            {[
              products[product].description,
              <strong> Price: {products[product].price}</strong>
            ]}
          </p>
          <ProductControl
            addScoreCart={() =>
              addScoreCart(
                products[product].id,
                products[product].name,
                products[product].price
              )
            }
          />
        </ProductList>
      ];
    });
    console.log();
    return (
      <div className={classes.Products}>
        <div className={classes.cart}>
          <NavLink className={classes.active} to={"/cart"}>
            Cart: {this.state.itemsCart}
          </NavLink>
        </div>
        {result}
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

const mapDispatchToProps = dispatch => {
  return {
    onItemsCartChange: value => dispatch({ type: "CHANGE", value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
