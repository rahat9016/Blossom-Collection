import React from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="product-wrapper">
      <img src={product.image} alt={product.title} className="product-image"/>
      <div >
        <p>{product.title}</p>
        <p >{product.description}</p>
        <p >$ {product.price}</p>
      </div>

      <div>
        <Link to={`/product/${product.id}`}>
          <button
          className="view-item"
            onClick={() => loadCurrentItem(product)} >
            View Item
          </button>
        </Link>
        <button
        className="add-cart"
          onClick={() => addToCart(product.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
