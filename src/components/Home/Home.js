import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Products from "../Products/Products";
import data from "../../fakedata/data.json";
const Home = () => {
  const [products, setProducts] = useState({
    products: data.products,
    size: "",
    cartItems: [],
    sort: "",
  });
// console.log(products.cartItems);
  // <!-------------Sort Products---------------->

  const sortProducts = (event) => {
    const sort = event.target.value;
    setProducts((products) => ({
      sort: sort,
      products: products.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
  // <!-------------Size Products---------------->
  const sizeProducts = (event) => {
    if (event.target.value === "") {
      setProducts({ size: event.target.value, products: data.products });
    } else {
      setProducts({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  // <!-------------Cart Items---------------->
  // const addToCart = (product) =>{
  //   // console.log(product);
  //   const cartItems = products.cartItems.slice()
  //   let alreadyInCart = false
  //   cartItems.forEach((item) => {
  //     if(item._id === product._id){
  //       item.count++
  //       alreadyInCart = true
  //     }
  //   })
  //   if(!alreadyInCart){
  //     cartItems.push({...product, count : 1})
  //   }
  //   setProducts({cartItems})
  // }
  return (
    <div>
      <Header />
      <main>
        <div className="main-container">
          <div className="products-container">
            <Products
              products={products}
              sortProducts={sortProducts}
              sizeProducts={sizeProducts}
              
            />
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
