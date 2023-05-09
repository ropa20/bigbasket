import React from "react";
import bigbasketlogo from "../Assests/bigbasketlogo.png";
import cart from "../Assests/shopping-cart.png";

import "./Header.css";
const Header = ({ count }) => {
  return (
    <div className="header-container">
      <div className="logo">
        <img width="100" height="auto" src={bigbasketlogo} />
      </div>
      <div className="search">
        <span>
          <input className="search-bar" type="text" placeholder="Search here" />
        </span>
        <span>
          <div className="cart">
            <img className="cart-icon" src={cart} />
            {count}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;
