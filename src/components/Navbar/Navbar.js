import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/blossom-collection-logo.png'
import { connect } from "react-redux";
import './navbar.css'
const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="navbar-container">
      <Link to="/">
          <img src={logo} className="logo"/>
      </Link>
      <Link to="/cart">
        <div className="cart-items">
          <h3>Cart</h3>
          <img
            
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
