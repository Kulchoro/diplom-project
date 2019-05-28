import React, { Component } from "react";
import classes from "./Products.module.css";
import axios from "../../axios";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
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

  addScoreCart = (id, name, description, price) => {
    const item = [...this.props.itemsCart];
    item.push({
      name: name,
      description: description,
      price: price,
      id: id
    });

    this.setState({
      itemsCart: item.length
    });
    this.props.onItemsCartChange(item);
    console.log(id);
  };

  render() {
    const addScoreCart = this.addScoreCart;
    let products = this.state.products;
    console.log();
    return (
      <div className={classes.Products}>
        <div className={classes.cart}>
          <NavLink className={classes.active} to={"/cart"}>
            Cart: {this.state.itemsCart}
          </NavLink>
        </div>
        {Object.keys(products).map(product => {
          return [
            <ProductList
              addScoreCart={() =>
                addScoreCart(
                  products[product].id,
                  products[product].name,
                  products[product].description,
                  products[product].price
                )
              }
              key={products.id}
              name={products[product].name}
              description={products[product].description}
              price={products[product].price}
            />
          ];
        })}
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
