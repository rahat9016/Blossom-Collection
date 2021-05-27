import React from "react";
import logo from '../../images/blossom-collection-logo.png'
import './Header.css'
const Header = () => {
  return (
    <div>
      <header className="header-container">
        <img width="50px" src={logo} alt="logo" className="logo"/>
      </header>
    </div>
  );
};

export default Header;
