import React from 'react';
import './productCompnent.css'
const Product = ({data}) => {
    const {image, title,price,type} = data
    return (
        <div className="product-box">
            <img src={image} alt={title} className="product-image"/>
            <p><small>{type}</small></p>
            <p>{title}</p>
            <p>{price}TK/.</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;