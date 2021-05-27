import React from "react";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="main-container">
        <div className="products-container">
          <Products />
        </div>
        <div className="cart-container">
          <Cart />
        </div>
      </main>
      
    </div>
  );
};

export default Home;
