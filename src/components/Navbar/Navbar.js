import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/blossom-collection-logo.png";
import { connect } from "react-redux";
import "./navbar.css";
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
      <div className="navbar-wrapper">
        <div>
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
        </div>

        <div>
          <Link to="/cart" className="cart-items">
            <i class="fas fa-shopping-cart"></i>
            <h4 className="cartCount">{cartCount}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
