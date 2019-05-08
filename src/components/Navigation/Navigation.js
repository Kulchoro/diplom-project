import React from 'react';
import classes from './Navigation.module.css';

function Navigation(props) {
  return (
    <div className={classes.Navigation}>
       <nav>
          <ul>
          <li>
              <a>
               About shop
              </a>
            </li>
            <li>
              <a>
               Products
              </a>
            </li>
            <li>
              <a>
              Checkout
              </a>
            </li>
            <li>
              <a>
             Contacts
              </a>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Navigation;