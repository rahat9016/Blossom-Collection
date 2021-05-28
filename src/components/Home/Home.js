import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Products from "../Products/Products";
import data from '../../fakedata/data.json'
import Filter from "../Filter/Filter";
const Home = () => {
  const [{products}] = useState({
    products: data.products
  })
  
  return (
    <div>
      <Header />
      <main >
        <Filter products={products} />
        <div className="main-container">
          <div className="products-container">
            <Products products={products}/>
          </div>
          <div className="cart-container">
            <Cart />
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Home;
