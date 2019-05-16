import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation(props) {
  return (
    <div className={classes.Navigation}>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/contacts"
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link url="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
